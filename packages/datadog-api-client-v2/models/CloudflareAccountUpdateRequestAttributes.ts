/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object for updating a Cloudflare account.
 */
export class CloudflareAccountUpdateRequestAttributes {
  /**
   * The API key of the Cloudflare account.
   */
  "apiKey": string;
  /**
   * The email associated with the Cloudflare account. If an API key is provided (and not a token), this field is also required.
   */
  "email"?: string;
  /**
   * The name of the Cloudflare account.
   */
  "name"?: string;
  /**
   * An allowlist of resources to restrict pulling metrics for including `'web', 'dns', 'lb' (load balancer), 'worker'`.
   */
  "resources"?: Array<string>;
  /**
   * An allowlist of zones to restrict pulling metrics for.
   */
  "zones"?: Array<string>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    resources: {
      baseName: "resources",
      type: "Array<string>",
    },
    zones: {
      baseName: "zones",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
