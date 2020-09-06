---
id: oc_tags
title: Tags List
---

## AlternativeLanguageDetail
When used inside a `<AlternativeLanguages>` tag, renders information about an alternative language a page is available in.

- `<AlternativeLanguageDetail data="alias" />`
  - Outputs the friendly name of the language (e.g. US English)
- `<AlternativeLanguageDetail data="link" />`
  - URL of the alternate language version of the current page
- `<AlternativeLanguageDetail data="code" />`
  - Language code of the alternate language (e.g. en-US)


## AlternativeLanguages
Renders the child elements of this tag once for each language variant the current page is available in.
This tag is intended to be used in combination with the `<AlternativeLanguageDetail>` tag to create a list of links to the current page in alternative languages.

``` html
<AlternativeLanguages>
	<!-- <AlternativeLanguageDetail data="alias" /> variant -->
	<link rel="alternate" href="<AlternativeLanguageDetail data="link" />" hreflang="<AlternativeLanguageDetail data="code" />" />
</AlternativeLanguages>
```


## DeviceFilter
Includes or excludes child elements depending on the device being used to load the page.
Please be mindful that these tags are based on user-agent detection which cannot be relied on to be 100% accurate.

``` html
<DeviceFilter include="Desktop">
	I am visible only on Desktop devices
</DeviceFilter>
```

``` html
<DeviceFilter exclude="Desktop">
	I am visible on everything EXCEPT Desktop devices
</DeviceFilter>
```

``` html
<DeviceFilter include="Tablet|Mobile">
	I am visible on Tablet and Mobile devices only
</DeviceFilter>
```


## DeviceVar
Outputs the device-specific value of a named device variable. Please be mindful that these tags are based on user-agent detection which cannot be relied on to be 100% accurate.

`<DeviceVar var="Device Variable Name" />`


## ItemData
This tag's main purpose is to output the value of a field, but the actual function and syntax can vary depending on
the context in which it is being used:

### In the Template Text section of a Field Template

`<ItemData property="{propertyName}" [format="url|html|javascript"] [escape="true|false"]/>`

This tag outputs the raw value of one of the properties of the field. The available property
names depend on the type of field you're creating a template for and will be available from the
"Property" dropdown of the Field Template editing screen in OpenCities admin.

#### Attributes
- property: the type of property to output (e.g. value, text, name, url, target, description, etc)
- format (optional): HTML-encodes the property for use in either url, html or javascript contexts
- escape (optional): If set to true, adds back-slashes before the following characters ,;&?|

### Field template rendering

`<ItemData DataDefinition="OC Title" Template="OC Page Title" />`

This is the style of ItemData tag you will see mostly in Content Templates and in Content List templates.
However, this style can be used in most html-based templates throughout the system, wherever the output is intended to be rendered as part of a page. This includes being able to nest them inside other Field Templates. This means you can render the value of one field by nesting it inside the template of another.

#### Attributes
- DataDefinition: the field name
- Template: the field template

### Date field template rendering

`<ItemData DataDefinition="Activate Date" Template="OC Posted on" numEntry="10" SDays="-5" EDays="5" SDate="2020-08-10" EDate="2020-09-10" Order="Ascending" />`

#### Date fields have a few additional attributes

- numEntry: Number of entries - Set how many entries to list. This is useful if the date field can have multiple or recurring dates.

- sDays: A zero-based relative value. 0 = the date/time the user looks at the site. In a scenario where the author has entered multiple dates, setting this value to 0 means you are including dates in the future only. This can be set to - or + values. Setting it to -1 means show dates from current date/time - 1.

- EDays: A zero-based relative value. Very similar to sDays, but works on the end-date entered by the author.

- SDate: (yyyy-MM-dd) - The same as sDays above, but instead of it being a relative value, the comparison is done using a specific date.

- EDate: (yyyy-MM-dd) - Same as eDays above, but instead of it being a relative value, the comparison is done using a specific date.

- Order: In a scenario where the author enters multiple dates, you can use this parameter to render the list of dates in ascending or descending order.


## OpenForms
Renders standard OpenForms embedding markup.

`<OpenForms name="My Form" linktoform="https://au.openforms.com/Form/d73b5837-b0e3-4591-be9f-ef7ce487a664" />`


## System
Renders system information about the current page. Usually for diagnostic purposes.

`<System type="page-language" />`

#### Types
- itemId: The id of the current page
- itemVersionId: The id of the current version of the current page
- current-language: Actual language of current Item being displayed. This can vary based on the language variants available in current item version in model.
- page-language: Language code of current page. This is the root language of the HTML document and will not change between item template processings.


## UserData
Used to output data about the logged in website visitor

`<UserData Property="First Name" />`

#### Properties
- Create Date: Date the user was created in OpenCities
- Email: User's email address
- First Name: User's first name
- Last Name: User's last name
- User Name: User's username
- Expire Date: Expiry date of user account
- [OC Department]: Any user detail found on the User Details admin screen


## oc:AddPageClass

:::warning

There is a change coming in this tag which will be in the September 2020 release. For the time being, please only use it to create class names that are lowercase-dash-separated.

:::

Adds a css class to the list of classes that are rendered in the `<body>` tag of the currently loading page and anywhere else in the document that the `<oc:PageClasses>` tag is used.

The value to be converted to a class can be specified in an attribute:
- `<oc:AddPageClass value="my-class-name" />`
- Output: `<body class="... my-class-name ...">`

Or it can be specified as a child element:
- `<oc:AddPageClass>my-class-name</oc:AddPageClass>`
- Output: `<body class="... my-class-name ...">`

When using a child element, you can make use of other OpenCities mark-up to produce the class:
- `<oc:AddPageClass><ItemData DataDefinition="OC Homepage Display" Template="OC CSS Class" /></oc:AddPageClass>`
- Output: `<body class="... homepage-pin ...">`

AS OF SEPTEMBER 2020:
The value of the tag is sanitised to produce a valid and predictable class name:
- `<oc:AddPageClass>     ===123!!!HELLO World!! %$#"    </oc:AddPageClass>`
- Output: `<body class="... n123---hello-world ...">`
