---
id: oc_tags
title: Tags
slug: /
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

## oc:Case
Used as part of a switch/case statement. See `<oc:Switch/>.`.

## oc:CommentForum
If supported, renders a public comment section to the current page. The comment section
will only render once per page, no matter how many times the tag is used. The first tag
with the highest "priority" value on the page will be the one that renders.

- `<oc:CommentForum/>`
- `<oc:CommentForum priority="10"/>`

## oc:ContentFilter
Renders the child elements only when the current user is authorized to view the site or if they're the owner of the page.

- `<oc:ContentFilter type="authorized">`Hi, I can see you're allowed to view this website!`</oc:ContentFilter>`
- `<oc:ContentFilter type="owner">`Hello there, you are the page owner!`</oc:ContentFilter>`

## oc:DateFieldIsCurrent
Checks a Date field on the current page and renders child elements depending on whether or not there are any future dates. TreatEmptyDateAsCurrent is an optional attribute, when omitted the default value is "true".

``` html
<oc:DateFieldIsCurrent field="OC Date" RenderIf="true">
  Current Info
</oc:DateFieldIsCurrent>
```

``` html
<oc:DateFieldIsCurrent field="OC Date" TreatEmptyDateAsCurrent="false" RenderIf="false">
  All Finished
</oc:DateFieldIsCurrent>
```

``` html
<oc:DateFieldIsCurrent field="OC Date" TreatEmptyDateAsCurrent="true">
  <oc:IfTrue>
		Current Info
	</oc:IfTrue>
	<oc:IfFalse>
		All Finished
	</oc:IfFalse>
</oc:DateFieldIsCurrent>
```

## oc:DateRender
Renders the current date/time according to a date formatting string. Good for copyright notices and cachebusters.

- `<oc:DateRender format="yyyy" />`
- Output: 2020

## oc:DeviceVarHasValue
Checks a device variable and renders child elements depending on whether or not the variable has a value set.

``` html
<oc:OcDeviceVarHasValue var="Google Map API Key" RenderIf="true">
  <!-- Render Map -->
</oc:DateFieldIsCurrent>
```

``` html
<oc:OcDeviceVarHasValue var="Google Map API Key" RenderIf="false">
  Google Maps API Key missing!
</oc:DateFieldIsCurrent>
```

## oc:FieldHasValue
Renders the child elements if any of a list of fields has a value on the current page. The RenderIf attribute is optional and defaults to true.

``` html
<oc:FieldHasValue fields="OC Contact Name|OC Contact Email|OC Contact Phone|OC Contact Phone Alternate|OC Website">
	<div class="side-box-section contact-details">
		<h3>Contact Information</h3>
		<itemdata datadefinition="OC Contact Name" template="OC Contact Details Snapshot" />
		<itemdata datadefinition="OC Contact Phone" template="OC Contact Details Snapshot Value" />
		<itemdata datadefinition="OC Contact Phone Alternate" template="OC Contact Details Snapshot" />
		<itemdata datadefinition="OC Contact Email" template="OC Contact Details Snapshot" />
		<itemdata datadefinition="OC Website" template="OC Contact Details Snapshot" />
	</div>
</oc:FieldHasValue>
```

``` html
<oc:FieldHasValue fields="OC Contact Name" RenderIf="false">
	<div class="side-box-section contact-details">
		<h3>Contact Information</h3>
		<p>A contact has no name</p>
	</div>
</oc:FieldHasValue>
```

## oc:GroupInfo
Renders information about the current website.

- `<oc:GroupInfo property="description"/>`
- `<oc:GroupInfo property="id"/>`
- `<oc:GroupInfo property="name"/>`
- `<oc:GroupInfo property="indexPageName"/>`
- `<oc:GroupInfo property="indexPageURL"/>`
- `<oc:GroupInfo property="indexPageURL-Relative"/>`
- `<oc:GroupInfo property="indexPageTitle"/>`
- `<oc:GroupInfo property="indexPageLang"/>`

``` html
<oc:GroupInfo property="description"/> - An EXAMPLE website description
<oc:GroupInfo property="description" case="lower"/> - an example website description
<oc:GroupInfo property="description" case="upper"/> - AN EXAMPLE WEBSITE DESCRIPTION
<oc:GroupInfo property="description" case="title"/> - An Example Website Description
```

## oc:Hotspot
*(Coming September 2020)* A named container that will render anything that has been appended to it from anywhere else in the page. The name does not have to be unique, multiple instances of the same `<oc:HotSpot>` tag will result in identical content being rendered at each instance.

:::important

In the interest of clean, maintainable code, this feature should be used sparingly. Any more than 2 or 3 hotspots across a single website may become difficult to keep track of, especially if these hotspots are being appended to from various places. Careful consideration is required before adding or appending to hotspots.

:::

- `<oc:HotSpot name="My Hotspot"/>`

## oc:HotspotAppend
*(Coming September 2020)* Appends the contents of this tag to the named HotSpot. This tag may be used in most html-based templates throughout the system, wherever the output is intended to be rendered as part of a page.

:::important

In the interest of clean, maintainable code, this feature should be used sparingly.
Any more than 2 or 3 hotspots across a single website may become difficult to keep track of, especially
if these hotspots are being appended to from various places. Careful consideration is required before
adding or appending to hotspots.

:::

``` html
<oc:HotspotAppend name="My HotSpot">
	<div class="my-hotspot-code">
		Hello world!!
	</div>
</oc:HotSpotAppend>
```

## oc:IfFalse
Used by some OpenCities tags to render child elements when the result of a boolean calculation the parent tag is false. Does nothing by itself.


## oc:IfTrue
Used by some OpenCities tags to render child elements when the result of a boolean calculation the parent tag is true. Does nothing by itself.

## oc:ImageDimensions
Outputs a query string which can be appended onto image references to automatically crop and resize them
according to rules defined in the current theme. You can find the rules on the "Images sizes" tab of the theme builder.

- `<img src="myimage.jpg?<oc:ImageDimensions name='PageImageFullWidth' device='desktop'/>">`
- Output: `<img src="myimage.jpg?dimension=pageimagefullwidth&w=1140">`

Note: Images can also be resized and cropped with a variety of different query strings

``` html
<img src="myimage.jpg?f=gif&c=16"> - convert the image to a gif with 16 colors
<img src="myimage.jpg?w=15"> - recompress the jpg image with a quality of 15%
<img src="myimage.jpg?w=150&h=150"> - resize and smart-crop an image to 150 x 150 pixels
<img src="myimage.jpg?w=150&h=150&p=0.5,0.5"> - resize and center-crop an image to 150 x 150 pixels
```
## oc:LayoutCell
*(Coming September 2020)* Dynamically renders an OpenCities 12-Column Grid cell. The cell can grow to fill 
empty space in the row or not render when it contains no content.

### Attributes

- **`group`**

  This is a name which is used to group cells together in the same layout calculation.

  Normally all cells in an individual grid will be part of the same group,
  but this is not enforced so as to allow use cases where it makes sense
  to have multiple groupings within the same grid.

  When building a template, all cells that you want to participate in a
  layout calculation must be part of the same group and should not be
  mixed with raw cell divs in the template. To work properly, all cells
  in the grid must be `<oc:LayoutCell>`.

  If the `group` attribute is left blank or omitted, the `expandable` attribute will be ignored.
	
- **`expandable` (default: false)**

  Boolean value that indicates whether a cell can be made wider to fill any remaining space at the end of a row

- **`hideIfEmpty` (default: false)**

  Boolean value that indicates that a cell should not render at all if contains no content

- **`class`**

  Custom classes to output on the rendered cell's class attribute
		
- **`xs` (default: 12)**

  Number of grid columns the cell will take up in extra-small "xs" size viewports
		
- **`s` (default: inherits from xs)**
  
  Number of grid columns the cell will take up in small "s" size viewports
		
- **`m` (default: inherits from s)**

  Number of grid columns the cell will take up in medium "m" size viewports
		
- **`lg` (default: inherits from m)**
  
  Number of grid columns the cell will take up in large "lg" size viewports

### Examples

Consider the following template where we've given each `<oc:LayoutCell>` a class name and filled it with content:

``` html
<div class="grid">
  <oc:LayoutCell group="content" class="main-content" m="8" lg="8" expandable="true">
    Here is some content for the main content area
  </oc:LayoutCell>
  <oc:LayoutCell group="content" class="sidebar-content" m="4" hideIfEmpty="true">
    Here is some content for the sidebar
  </oc:LayoutCell>
</div>
```

Once rendered, the generated html will look like this:

``` html
<div class="grid">
  <div class="col-xs-12 col-m-8 main-content">
    Here is some content for the main content area
  </div>
  <div class="col-xs-12 col-m-4 sidebar-content">
    Here is some content for the sidebar
  </div>
</div>
```

You will notice that the rendered cells have the class `col-xs-12` even though we didn't provide a 
value for the `xs` attribute.	This is because `xs` has a default value of 12 and will render on a cell 
whether it is provided or not. 12 is the default because OpenCities uses a 12-column grid and a
cell will go full-width if not otherwise specified.

You may also notice that the `lg` attribute has been omitted from the main-content cell even though 
we provided a value for the `lg` attribute. This is because the large and medium viewport sizes have 
the same column-width value (8). Since each viewport size inherits its column-width from the 
next-smallest size (e.g. large inherts from medium), the value for the large viewport is redundant 
and does not appear in the rendered cell.
	
Now watch what happens when we remove content from the sidebar cell:

``` html	
<div class="grid">
  <oc:LayoutCell group="content" class="main-content" m="8" lg="8" expandable="true">
    Here is some content for the main content area
  </oc:LayoutCell>
  <oc:LayoutCell group="content" class="sidebar-content" m="4" hideIfEmpty="true">
  
  </oc:LayoutCell>
</div>	
```

Once rendered, the generate html looks a bit different:

``` html	
<div class="grid">
  <div class="col-xs-12 main-content">
    Here is some content for the main content area
  </div>
</div>
```

You will first notice that the sidebar cell has disappeared. This is because it had the `hideIfEmpty` 
attribute set to true and it contained nothing but white space. 

You might also notice that the main-content cell now only has the `col-xs-12` column-width class. 
This is because it had the `expandable` attribute set to `true`, and because the sidebar cell no longer appears, 
we were left with 4 unused columns in the row. The `expandable` attribute allowed the main-content cell to
expand out to the full 12 columns and fill the empty space. Because every viewport is now 12-columns wide,
we remove the redundant `col-m-12` and are left with simply `col-xs-12`.

## oc:PageClasses
Renders a list of page-level css classes and any classes that were added through the `<oc:AddPageClass>` tag. All values are sanitized to valid and predictable class names. NOTE: This tag is already part of the standard site template and already renders on every page.

### Classes rendered

content-type-{content-type}
- content-type: The name of the Content Type of the current page

content-template-{content-template}
- content-template: The name of the Content Template used by the current page

group-template-{group-template}
- group-template: The Group Template in use by the current page (note: Group Templates are system-level templates)

page-name-{page}
- page: Sanitized page name

page-sequence-{n}
- n: Page order compared to siblings on the current branch of the site tree (the top item is 1)

page-depth-{n}
- n: Depth in the site tree from the root page (the depth of all root pages is 1)

page-section-{n}
- n: Sequence of the root parent page (i.e. the root page's order compared to other root-level siblings)

website-type-{type}		
- type: The type of website (i.e. primary, defaultsubsite, intranet, mycity)

device-{class}
- class: The class of device (i.e. desktop, tablet, mobile)

### Example classes
content-type-oc-general
- Content type is "OC General"

content-template-oc-2-column
- Content template is "OC 2 Column"

group-template-oc-2-column-with-default-header
- Group template is "OC 2 Column with Default Header"

page-name-community-partnerships
- Page name is "Community Partnerships"

page-sequence-5
- Page is fifth in order amongst its siblings

page-depth-2
- The page appears 1 level deeper than the root page

page-section-3
- The root page is third in order amongst its siblings

website-type-primary
- The website type is Primary

device-desktop
- The device is a Desktop device

## oc:PageTurner (DEPRECATED)

:::note

This tag is deprecated. It is no longer used by OpenCities and will not be developed further, however it
remains for legacy support and custom development where desired.

:::

Renders a link to the next or previous page in an ordered list of pages of a specified Content Type.
This tag is backed by a dynamically generated Content list so its underlying behaviour is more that of
a search than of navigation. For instance: pages are drawn from the entire website, not just the
same branch of the site tree.

**contentType**
- The name of the Content Type to use

**sortby**
- The list of sorting criteria

``` html
{OC Composite Date|NextDate|ASC} - Sort ascending by the "Next Date" value in the "OC Composite Date" field
{OC Title|String|ASC} - Sort ascending alphabetical order by the value of the "OC Title" field
{ActivateDate|StartDate|DESC} - Sort descending order of Activate Date
{OC Title|String|ASC}{ActivateDate|StartDate|DESC} - Criteria can be stacked
```

All of these combinations can be found under Sort Options on the Sort & Filter tab when creating a Content List.

``` html
<div class="grid">
	<div class="col-xs-12 col-lg-6">
		<OC:PageTurner contentType="OC Event" sortby="{OC Composite Date|NextDate|ASC}" direction="Prev"/>
	</div>
	<div class="col-xs-12 col-lg-6">
		<OC:PageTurner contentType="OC Event" sortby="{OC Composite Date|NextDate|ASC}" direction="Next"/>
	</div>
</div>
```

## oc:Param
Used by some OpenCities tags where a paramater is required for use in its function. Does nothing by itself.

## oc:PostedBy
Renders the name of the owner and/or author of the current page in the form of a sentence. Primarily intended for the Intranet. Sentences are drawn from the text snippets, where n0/n1 is replaced with the value specified in the type attribute.

**Text snippets**
- Created by n0
- Created and last updated by n0
- Created and last updated by n0
- Last updated by n0
- Created by n0 last updated by n1

**Types**
- fullname
- profile_link (Intranet only)
- profile_image_url (Intranet only)
- {Any user detail found on the User Details admin screen}

`<oc:PostedBy type="fullname"/>`

## oc:RelatedContentList
Renders a list of pages that are related to the current page according to the criteria laid out in
the Site Management screen in the Related Content tile.

``` html
<oc:RelatedContentList/> - Renders with a standard container div  (i.e. <div class="related-items">)
<oc:RelatedContentList directChildOfGrid="true" /> - Renders a container div with OpenCities grid item classes (i.e. <div class="col-xs-12 related-items">)
```

## oc:Script
*(Coming September 2020)* Renders an HTML script tag at a defined position in the HTML document.

### Attributes
- src:
  - Script path
- defer:
  - Script tag renders with the defer attribute when true
  - Must be explicitly set to true to be rendered in the resultant script tag
  - OC tags do not support attributes without values
- position: (default: inline)
  - Defines where the script tag should be rendered in the html document
  - One of: inline, head, end
- [others]
  - All other attributes are carried through to the resulting `<script>` tag

**Example:** `<oc:Script src="https://example.com/path/to/file.js" position="end" defer="true" id="myscript" data-hello="world"/>`

**Output at before closing tag of html document:** `<script src="https://example.com/path/to/file.js" defer id="myscript" data-hello="world"></script>`

## oc:Slideshow
Renders a list of OC Slide pages in a standard mark-up pattern that can be used by the OpenCities JavaScript slideshow implementation. Used in layout builder to define the location and configuration of rotating banners/slideshow. Used in the WYSIWYG editor to embed rotating banners/slideshow.

In spite of being mainly a system-level tag, `oc:Slideshow` can be used to create custom slideshows

`<oc:Slideshow name="uniqueName" class="profile-slideshow" container-div-class="slideshow-container" location="/Home/Slides" count="10" data-animation-style="Slide"/>`

## oc:Snippet
Renders a the value of a named text snippet, which can be defined in the Text Snippets screen of the admin.

`<oc:Snippet name="My custom snippet />`

## oc:SnippetFormat
Renders a the value of a named text snippet with formatted placeholders, which can be defined in the Text Snippets screen of the admin.

Imagine we create a snipped called "My Snippet" with the following text:
- `Hello {0} you are looking at {1} today`

And we create the following mark-up in our template:

``` html
<oc:SnippetFormat name="My Snippet">
	<oc:Param><UserData Property="First Name" /> <UserData Property="Last Name" /></oc:Param>
	<oc:Param><ItemData DataDefinition="OC Title" Template="OC Page Title" /></oc:Param>
</oc:SnippetFormat>
```

Output:
- `Hello Joe Bloggs you are looking at Community Partnerships today`

## oc:StyleSheet
*(Coming September 2020)* Renders an HTML link tag at the end of the head of an html document.

Note that scss files are auto-compiled to css, so references should be to myfile.css rather than myfile.scss or myfile.sass

### Attributes:
- href:
  - Stylesheet path
- rel: (default: stylesheet)
  - defaults to "stylesheet" but can be set to anything via the OC tag
- type: (default: text/css)
  - defaults to "text/css" but can be set to anything via the OC tag
- [others]
  - All other attributes are carried through to the resulting `<link>` tag

**Example:** `<oc:StyleSheet href="https://example.com/file.css" media="all" data-hello="world"/>`

**Produces something like this in the head of the html document:** `<link href="https://example.com/file.css" rel="stylesheet" type="text/css" media="all" data-hello="world"/>`

## oc:Switch
A switch/case statement that takes an `<oc:Param>` and renders the child elements of the first matching `<oc:Case>` element.

``` html
<oc:Switch>
	<oc:Param><ItemData DataDefinition="OC Title" Template="default" /></oc:Param>
	<oc:Case val="Home">This renders if the OC Title value is Home</oc:Case>
	<oc:Case val="Logout">This renders if the OC Title value is Logout</oc:Case>
	<oc:Case default="true">
		This renders if the OC Title value is neither Home not Logout.
		You can specify OpenCities tags in an oc:Case tag too, watch:
		Description: <ItemData DataDefinition="OC Short Description" Template="default"/>
	</oc:Case>
</oc:Switch>
```

## oc:ThemePath
**(Coming September 2020)** Renders the path to files in the currently loaded theme (including in Theme Preview mode).

Writing this:
`<oc:ThemePath />`

Produces something like this:
`/files/templates/00000000-0000-0000-0000-000000000000/7d7464b8-f248-4433-b870-efe915aca122/`

## oc:ThemeScript
**(Coming September 2020)** Renders an HTML script tag at a defined position in the HTML document. Resolves the path to the site template for the src attribute, which supports theme preview mode. Will copy any unprocessed attributes to the final rendered script tag.

### Attributes
- src:
  - Name of script file in the current theme
- defer:
  - Script tag renders with the defer attribute when true
  - Must be explicitly set to true to be rendered in the resultant script tag
  - OC tags do not support attributes without values
- position: (default: inline)
  - Defines where the script tag should be rendered in the html document
  - One of: inline, head, end
- [others]
  - All other attributes are carried through to the resulting `<script>` tag

**Example:** `<oc:ThemeScript src="file.js" position="end" defer="true" id="myscript" data-hello="world"/>`

**Produces something like this before the closing body tag of the html document:**
`<script src="/files/templates/00000000-0000-0000-0000-000000000000/7d7464b8-f248-4433-b870-efe915aca122/file.js" defer id="myscript" data-hello="world"></script>`

## oc:ThemeStyleSheet
**(Coming September 2020)** Renders an HTML link tag at the end of the head of an html document. Resolves the path to the site template for the href attribute, which supports theme preview mode. Will copy any unprocessed attributes to the final rendered link tag. Note that scss files are auto-compiled to css, so references should be to myfile.css rather than myfile.scss or myfile.sass.

### Attributes
- href:
  - Stylesheet path
- rel: (default: stylesheet)
  - defaults to "stylesheet" but can be set to anything via the OC tag
- type: (default: text/css)
  - defaults to "text/css" but can be set to anything via the OC tag
- [others]
  - All other attributes are carried through to the resulting `<link>` tag

**Example:** `<oc:ThemeStyleSheet href="file.css" media="all" data-hello="world"/>`

**Produces something like this in the head of the html document:** `<link href="/files/templates/00000000-0000-0000-0000-000000000000/7d7464b8-f248-4433-b870-efe915aca122/file.css" rel="stylesheet" type="text/css" media="all" data-hello="world"/>`

## oc:UserInfo
Renders information about the Owner or Author user of the current page.

- Types:
  - owner
  - author
- Properties:
  - fullname
  - profile_link (Intranet only)
  - profile_image_url (Intranet only)
  - {Any user detail found on the User Details admin screen}
- Width:
  - Integer setting the width of the profile image when propery=profile_image_url

`<oc:UserInfo type="owner" property="fullname"/>`

`<oc:UserInfo property="profile_image_url" width="100"/>`
