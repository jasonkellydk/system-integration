package com.system.controller

import com.system.models.Tax
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class DockerController {

  @RequestMapping(value = ["/taxes"], method = [RequestMethod.GET], produces = [MediaType.APPLICATION_XML_VALUE])
  fun home(): Tax {
    return Tax(
        1000,
        45
    )
  }
}
