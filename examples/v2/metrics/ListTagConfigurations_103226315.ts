/**
 * List tag configurations with configured filter returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listTagConfigurations"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListTagConfigurationsRequest = {
  filterConfigured: true,
};

apiInstance
  .listTagConfigurations(params)
  .then((data: v2.MetricsAndMetricTagConfigurationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));