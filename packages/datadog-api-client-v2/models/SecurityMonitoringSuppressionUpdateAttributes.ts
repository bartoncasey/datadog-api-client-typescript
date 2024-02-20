/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The suppression rule properties to be updated.
 */
export class SecurityMonitoringSuppressionUpdateAttributes {
  /**
   * A description for the suppression rule.
   */
  "description"?: string;
  /**
   * Whether the suppression rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * A Unix millisecond timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. If unset, the expiration date of the suppression rule is left untouched. If set to `null`, the expiration date is removed.
   */
  "expirationDate"?: number;
  /**
   * The name of the suppression rule.
   */
  "name"?: string;
  /**
   * The rule query of the suppression rule, with the same syntax as the search bar for detection rules.
   */
  "ruleQuery"?: string;
  /**
   * The suppression query of the suppression rule. If a signal matches this query, it is suppressed and not triggered. Same syntax as the queries to search signals in the signal explorer.
   */
  "suppressionQuery"?: string;
  /**
   * The current version of the suppression. This is optional, but it can help prevent concurrent modifications.
   */
  "version"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    expirationDate: {
      baseName: "expiration_date",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    ruleQuery: {
      baseName: "rule_query",
      type: "string",
    },
    suppressionQuery: {
      baseName: "suppression_query",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSuppressionUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}