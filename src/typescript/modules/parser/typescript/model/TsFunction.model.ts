import { TsCommentModel } from "./TsComment.model";
import { TsParamModel } from "./TsParam.model";

export interface TsFunctionModel {
  functionName: string;
  returnType: string;
  isStatic: boolean;
  isExport: boolean;
  paramList: TsParamModel[];
  comments: TsCommentModel[];
}
