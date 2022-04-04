module.exports = {
  "personality-service": {
    output: {
      mode: "single",
      target: `./src/api/generated/questions/questions.ts`,
      schemas: `./src/api/generated/questions/model`,
      client: "react-query",
      override: {
        mutator: {
          path: `./src/api/axios/axiosClient.ts`,
          name: `axiosClient`
        }
      }
    },
    input: {
      target: "../service/openapi/service-api.yml"
    }
  }
};
