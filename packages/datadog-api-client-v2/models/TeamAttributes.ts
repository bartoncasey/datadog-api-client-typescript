/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team attributes
 */
export class TeamAttributes {
  /**
   * Creation date of the team
   */
  "createdAt"?: Date;
  /**
   * Free-form markdown description/content for the team's homepage
   */
  "description"?: string;
  /**
   * The team's identifier
   */
  "handle": string;
  /**
   * The number of links belonging to the team
   */
  "linkCount"?: number;
  /**
   * Modification date of the team
   */
  "modifiedAt"?: Date;
  /**
   * The name of the team
   */
  "name": string;
  /**
   * A brief summary of the team, derived from the `description`
   */
  "summary"?: string;
  /**
   * The number of users belonging to the team
   */
  "userCount"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    linkCount: {
      baseName: "link_count",
      type: "number",
      format: "int32",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}