import { XMongoModel } from "xpress-mongo";


class BaseModel extends XMongoModel {
   static strict = true;

    /**
     * Set Methods you want to use across all models
     */
}


// Export Model as Default
export default BaseModel;
