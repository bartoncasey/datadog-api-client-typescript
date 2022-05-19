/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type MonitorFormulaAndFunctionEventsDataSource =
  | typeof RUM
  | typeof CI_PIPELINES
  | typeof CI_TESTS;
export const RUM = "rum";
export const CI_PIPELINES = "ci_pipelines";
export const CI_TESTS = "ci_tests";
