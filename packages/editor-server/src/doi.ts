/*
 * doi.ts
 *
 * Copyright (C) 2022 by Posit Software, PBC
 *
 * Unless you have received this program directly from Posit Software pursuant
 * to the terms of a commercial license agreement with Posit Software, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

import { DOIResult, DOIServer, kDoiFetchCsl } from "editor-types"

import jayson from 'jayson'
import { jsonRpcMethod } from "./json-rpc";


export function doiServer() : DOIServer {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async fetchCSL(doi: string, progressDelay: number) : Promise<DOIResult> {
      return {
        status: 'notfound',
        message: null,
        error: ''
      }
    }
  }
}

export function doiServerMethods() : Record<string, jayson.Method> {
  const server = doiServer();
  const methods: Record<string, jayson.Method> = {
    [kDoiFetchCsl]: jsonRpcMethod(args => server.fetchCSL(args[0], args[1]))
  };
  return methods;
}


