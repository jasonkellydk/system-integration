package com.system.models

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import javax.xml.bind.annotation.XmlElement
import javax.xml.bind.annotation.XmlRootElement

@XmlRootElement(name = "tax")
@XmlAccessorType(XmlAccessType.FIELD)
data class Tax(
    @XmlElement
    val salary: Int,
    @XmlElement
    var taxPercentage: Int
) {
  constructor(): this(0, 0)
}
