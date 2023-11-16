/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectedCostAttributes } from "./ProjectedCostAttributes";
import { ProjectedCostType } from "./ProjectedCostType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Projected Cost data.
 */
export class ProjectedCost {
  /**
   * Projected Cost attributes data.
   */
  "attributes"?: ProjectedCostAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost data.
   */
  "type"?: ProjectedCostType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "ProjectedCostAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProjectedCostType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectedCost.attributeTypeMap;
  }

  public constructor() {}
}