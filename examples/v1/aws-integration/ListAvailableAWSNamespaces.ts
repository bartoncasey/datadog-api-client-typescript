/**
 * List namespace rules returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

apiInstance
  .listAvailableAWSNamespaces()
  .then((data: string[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));