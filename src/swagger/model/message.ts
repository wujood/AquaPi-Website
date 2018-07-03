/**
 * AquaPi Swagger API
 * REST API for the AquaPi
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Message {
    messagetype?: Message.MessagetypeEnum;

    text?: string;

}
export namespace Message {
    export enum MessagetypeEnum {
        Error = <any> 'error',
        Warning = <any> 'warning',
        Info = <any> 'info',
        Suggestion = <any> 'suggestion'
    }
}