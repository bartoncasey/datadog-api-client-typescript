/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesResponse } from "./TimeseriesResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message containing one response to a timeseries query made with timeseries formula query request.
 */
export class TimeseriesFormulaQueryResponse {
  /**
   * A message containing the response to a timeseries query.
   */
  "data"?: TimeseriesResponse;
  /**
   * The error generated by the request.
   */
  "errors"?: string;

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
      type: "TimeseriesResponse",
    },
    errors: {
      baseName: "errors",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesFormulaQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
