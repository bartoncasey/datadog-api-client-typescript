/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Project } from "./Project";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Project response
 */
export class ProjectResponse {
  /**
   * A Project
   */
  "data"?: Project;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Project",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectResponse.attributeTypeMap;
  }

  public constructor() {}
}