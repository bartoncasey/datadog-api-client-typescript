/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The type of sorting algorithm.
 */

export type CIAppAggregateSortType = typeof ALPHABETICAL | typeof MEASURE;
export const ALPHABETICAL = "alphabetical";
export const MEASURE = "measure";