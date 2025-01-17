/*
 * server.ts
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


import { EditorServer } from "editor-types";

import { crossrefServer, crossrefServerMethods } from "./crossref";
import { dataCiteServer, dataCiteServerMethods } from "./datacite";
import { doiServer, doiServerMethods } from "./doi";
import { environmentServer, environmentServerMethods } from "./environment";
import { pandocServer, pandocServerMethods } from "./pandoc";
import { pubMedServer, pubMedServerMethods } from "./pubmed";
import { xrefServer, xrefServerMethods } from "./xref";
import { zoteroServer, zoteroServerMethods } from "./zotero";

import jayson from 'jayson'

export function editorServer() : EditorServer {
  return {
    pandoc: pandocServer(),
    doi: doiServer(),
    crossref: crossrefServer(),
    datacite: dataCiteServer(),
    pubmed: pubMedServer(),
    zotero: zoteroServer(),
    xref: xrefServer(),
    environment: environmentServer()
  };
}

export function editorServerMethods(): Record<string,jayson.Method> {
  return {
    ...pandocServerMethods(),
    ...doiServerMethods(),
    ...crossrefServerMethods(),
    ...dataCiteServerMethods(),
    ...pubMedServerMethods(),
    ...zoteroServerMethods(),
    ...xrefServerMethods(),
    ...environmentServerMethods()
  }
}
