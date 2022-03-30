/**
 * List tag configurations returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listTagConfigurations"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListTagConfigurationsRequest = {
  filterTagsConfigured: "ExampleListtagconfigurationsreturnsSuccessresponse",
};

apiInstance
  .listTagConfigurations(params)
  .then((data: v2.MetricsAndMetricTagConfigurationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));