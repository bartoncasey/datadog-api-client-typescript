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
   * An allowlist of resources to restrict pulling metrics for.
   */
  "resources"?: Array<string>;
  /**
   * An allowlist of zones to restrict pulling metrics for.
   */
  "zones"?: Array<string>;

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
    resources: {
      baseName: "resources",
      type: "Array<string>",
    },
    zones: {
      baseName: "zones",
      type: "Array<string>",
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
