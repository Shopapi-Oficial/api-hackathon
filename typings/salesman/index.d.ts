/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

  type Maybe<T> = T | null

  type GenerateSalesmanCodeOutput = {
    salesman_cod: string
  }

  type GenerateSalesmanCodeInput = {
    userId: string
  }

  type Mutation = {
    generateSalesmanCode?: Maybe<GenerateSalesmanCodeOutput>
  }

  type generateSalesmanCodeArgs = {
    arg1: GenerateSalesmanCodeInput
  }
