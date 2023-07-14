/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema validation warnings.
 */
export class ServiceDefinitionMetaWarnings {
  /**
   * The warning instance location.
   */
  "instanceLocation"?: string;
  /**
   * The warning keyword location.
   */
  "keywordLocation"?: string;
  /**
   * The warning message.
   */
  "message"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    instanceLocation: {
      baseName: "instance-location",
      type: "string",
    },
    keywordLocation: {
      baseName: "keyword-location",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionMetaWarnings.attributeTypeMap;
  }

  public constructor() {}
}
