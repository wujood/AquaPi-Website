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



export interface PushConfiguration {
    piid?: string;

    minairtemperature?: number;

    maxairtemperature?: number;

    minwatertemperature?: number;

    maxwatertemperature?: number;

    brightnesstreshhold?: number;

    feederfrequency?: number;

    togglepushnotifications?: number;

    waterflowsensitivity?: number;

}
