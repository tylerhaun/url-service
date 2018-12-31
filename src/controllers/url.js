import Url from "../models/url";
import CrudController from "./crud";


export default class UrlController extends CrudController {

    constructor() {
        super();
        this.model = Url;
    }

}

