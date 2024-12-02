/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesChangedResourceType } from "./ChangeEventCustomAttributesChangedResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a uniquely identified resource. Only the resource type `feature_flag` is supported.
 */
export class ChangeEventCustomAttributesChangedResource {
  /**
   * Resource's name.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesChangedResourceType;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesChangedResourceType",
      required: true,
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
    return ChangeEventCustomAttributesChangedResource.attributeTypeMap;
  }

  public constructor() {}
}