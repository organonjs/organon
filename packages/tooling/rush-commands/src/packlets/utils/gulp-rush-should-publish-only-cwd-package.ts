import { Transform, TransformCallback } from "stream";
import { obj } from "through2";
import PluginError from "plugin-error";
import { default as File } from "vinyl";

const PLUGIN_NAME: string = "rush-should-publish-only-cwd-package";

interface IProject {
  packageName: string;
  projectFolder: string;
  shouldPublish: boolean;
}

export function rushShouldPublishOnlyCwdPackage(project: IProject): Transform {
  return obj(function (file: File, enc: BufferEncoding, cb: TransformCallback) {
    if (file.isNull()) {
      // nothing to do
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit("error", new PluginError(PLUGIN_NAME, "Streams not supported!"));
    } else if (file.isBuffer()) {
      let contents = file.contents.toString(enc);

      contents = contents.replace(/("shouldPublish": )(true)/g, "$1false");

      const index = contents.indexOf(project.packageName);
      const slice = contents.slice(index).replace("false", "true");
      contents = contents.slice(0, index) + slice;

      file.contents = Buffer.from(contents);

      cb(null, file);
    }
  });
}
