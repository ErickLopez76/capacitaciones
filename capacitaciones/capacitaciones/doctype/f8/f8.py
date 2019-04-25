# -*- coding: utf-8 -*-
# Copyright (c) 2019, ericklopez and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class F8(Document):
	pass

@frappe.whitelist()
def callsp(f8name):
	frappe.db.sql('select f8tocapacitacion("' + f8name +'")')
	frappe.db.commit()
	frappe.errprint("f8name")
