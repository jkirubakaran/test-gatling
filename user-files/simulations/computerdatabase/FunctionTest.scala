/**
 * Copyright 2011-2018 GatlingCorp (http://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class FunctionTest extends Simulation {

  val httpConf = http
    .baseURL("https://jebfuncappjava.azurewebsites.net") // Here is the root for all relative URLs
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  
  val scn = scenario("Demo POST XML to API") // A scenario is a chain of requests and pauses
    .exec(http("post request") // Here's an example of a POST request
      .get("/api/HttpTriggerJS1?code=MN9FasfEhVNgRp4LTRtrFv33/Wp2naP4DsXR9AjbaWl2GlYgjbGAqQ==&name=boo")
      //.header(HttpHeaderNames.ContentType, HttpHeaderValues.ApplicationXml)
      //.header(HttpHeaderNames.Accept, HttpHeaderValues.ApplicationXml)
      //.body(RawFileBody("test.xml"))
    )

  setUp(scn.inject(constantUsersPerSec(30) during (300 seconds)).protocols(httpConf))

}
