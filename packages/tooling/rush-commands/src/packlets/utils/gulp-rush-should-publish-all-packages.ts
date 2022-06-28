import { Transform, TransformCallback } from "stream";
import { obj } from "through2";
import PluginError from "plugin-error";
import { default as File } from "vinyl";

const PLUGIN_NAME: string = "rush-should-publish-all-packages";

interface IProject {
  packageName: string;
  projectFolder: string;
  shouldPublish: boolean;
}

export function rushShouldPublishAllPackages(project: IProject): Transform {
  return obj(function (file: File, enc: BufferEncoding, cb: TransformCallback) {
    if (file.isNull()) {
      // nothing to do
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit("error", new PluginError(PLUGIN_NAME, "Streams not supported!"));
    } else if (file.isBuffer()) {
      const contents = file.contents.toString(enc);

      file.contents = Buffer.from(contents.replace(/("shouldPublish": )(false)/g, "$1true"));

      cb(null, file);
    }
  });
}
