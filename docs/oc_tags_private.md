---
id: oc_tags_private
title: Private Tags
---

The following tags are considered in the "private" scope of OpenCities. They are documented here in the interest of transparency and to explain the purpose of various tags developers may find when looking at system templates. Developers may make use of these tags to experiment but should understand they may not work as expected, conflict with existing system usages or have the desired functionality for their use case. Use is to be considered unsupported and at the individual's own risk.

## oc:AddressPicker
Used in layout builder to define the location of an address picker.

## oc:Calendar
Used in the WYSIWYG editor to embed calendars.
- `<oc:calendar data-calendar-id="f52631e8-0411-43c8-90e6-6ff3ed6b0cf0" data-entity-name="All events" />`

## oc:CombinedSearchResults
Used on the Intranet to display search results when a combined content/user search is used.
- `<oc:CombinedSearchResults />`

## oc:CommentCount
Used on the Intranet to renders the number of comments posted on a message board page. Private because we don't guarantee to keep supporting this syntax and may replace it in future.
- `<oc:CommentCount container="p" class="list-item-comments" spanseparators="true" linktocomments="false" />`

## oc:ConfigurationValue
Outputs an OpenCities configuration value.

:::warning

Use with caution.

:::

## oc:ContentSubscription
Renders a subscription form that allows website visitors to subscribe to be notified of updates to the page where the administrator has allowed subscriptions.

:::note

This tag is already part of the standard site template and already renders on every page.

:::

- `<oc:ContentSubscription/>`


## oc:CurrentPageLang
Outputs html lang="" attribute if the current processed page language is different to the current page language.

## oc:DoItOnline
Used in layout builder to define the location and configuration of Do It Online / Top Tasks blocks.

## oc:FeatureFlag
Renders different content depending on whether or not a product-level feature flag is enabled.

``` html
<oc:FeatureFlag name="FabulousNewFeature">
	<oc:IfTrue>Hey check out this new feature!</oc:IfTrue>
	<oc:IfFalse>Watch this space for a new feature!</oc:IfFalse>
</oc:FeatureFlag>
```

## oc:FeaturedContent
Used in layout builder to define the location and configuration of Featured Content blocks.

## oc:FeaturedSection
Used in "Featured Sections" to output various template parts onto the page.

## oc:FeedbackForm
Renders a feedback form that allows website visitors to leave feedback on the content of a page where
the administrator has allowed the feedback form to appear.

:::note

This tag is already part of the standard site template and already renders on every page.

:::

- `<oc:PageFeedbackForm/>`

## oc:FieldAsCssClasses
The value of a field sanitised and converted to predictable CSS classes.

:::note

This tag currently only works with Listbox field types.

:::

- `<oc:FieldAsCssClasses field="OC Message Visibility"/>`

## oc:FilterListView
Adds the dlv_ContentListName to News and Events "tagged as" links.

## oc:FooterWidgets
Renders a list of OC Footer Widget pages that are found as immediate descendents of the path given in the location attribute.

- `<oc:FooterWidgets location="/Site-Footer/Footer-Widgets" />`


## oc:HeaderSearch
Used in layout builder to define the location and configuration of the header Search block.

## oc:HomepageListing
Used in layout builder to define the location and configuration of homepage listings.

## oc:ImageGallery
Used in the WYSIWYG editor to embed image galleries.

```html
<oc:imagegallery data-item-id="50361e0d-81d6-4764-8429-620b503f78db" data-item-name="Central Square Gallery" type="sharedContent" data-languagecode="en-AU" data-datadefinition-id="cdbd1c6d-f9c7-43b8-a54b-dda4d89119b7" data-template-name="OC Masonry Theme"></oc:imagegallery>
```

## oc:InlineContentList
Used in the WYSIWYG editor to embed content lists generated in the Insert Content Lists tool.

```html
<oc:inlinecontentlist data-content-types="\*" data-content-type-names="" data-content-labels="Central-Park" data-should-have-all-labels="false" data-count="3" data-direct-children-only="true" data-site-names="Public" data-sites="720cfbd8-df7e-4b88-bf92-e218d51ee173" data-sort-by="0" data-sort-by-name="Sequence" data-sort-direction="asc" data-template="9daaf763-cd7d-4a59-97e6-b6ee4d15de78" data-template-name="Stream, With image, title and description" data-section-title="" data-section-title-level="2" data-link-text="" data-link-url="" data-link-render-as="Link" data-link-target="\_self" data-control-class="SCSearchList" data-oc-list="true"></oc:inlinecontentlist>
```

## oc:JsTextSnippets
Renders a script tag that references the OpenCities javascript text-snippets.

:::note

This tag is already part of the standard site template and already renders on every page.

:::

- `<oc:JsTextSnippets/>`


## oc:Maps
Used in the WYSIWYG editor to embed maps.
`<oc:map data-map-id="7c8c0fc1-cfe5-44eb-8f2b-888fad0ddd4e" data-map-name="A map &amp; layer">`


## oc:Metadata
Renders a list of standard meta tags, social media tags and custom metadata defined in the Metadata tile under Site Management.

:::note

This tag is already part of the standard site template and already renders on every page.

:::

`<oc:Metadata/>`

## oc:OpenFormsAutoPopulate
Renders a list of hidden form inputs to auto-populate any embedded OpenForms.

:::note

This tag is already part of the standard site template and already renders on every page.

:::

- `<oc:OpenFormsAutoPopulate type="hidden"/>`


## oc:PageEditLink
Used on the Intranet where staff are able to edit their own pages.


## oc:PostedTo
Used on the Intranet to output the list of categories a message board item was posted under.


## oc:ReadSpeaker
Used to render the readspeaker script tag and player markup where ReadSpeaker is enabled on the website.

:::note

This tag is already part of the standard site template and already renders on every page.

:::


## oc:ScriptCombine
Merges child script and link/css elements where possible to reduce the number of http requests in a page-load. This tag only operates on theme files and cannot be used to merge files stored elsewhere. This tag is not intended to be used for custom development so please be mindful of any support implications if you decide to use it.

```html
<oc:ScriptCombine combine="link">
    <link href="<!--templatePath-->file1.css" rel="stylesheet" type="text/css" />
    <link href="<!--templatePath-->file2.css" rel="stylesheet" type="text/css" />
</oc:ScriptCombine>

<oc:ScriptCombine combine="script">        
    <script src="<!--templatePath-->file1.js"></script>
    <script src="<!--templatePath-->file2.js"></script>
</oc:ScriptCombine>
```

## oc:Search
Used in layout builder to define the location and configuration of the site search control.


## oc:StaffProfileEditForm
Used on the Intranet where staff are able to edit their own profile.
`<oc:StaffProfileEditForm />`


## oc:StructuredContent (DEPRECATED)
Temporary tag to support Google's special COVID-19 structured content.

:::note

This tag is deprecated. It is already part of the standard site template and already renders on every page.

:::


## oc:TabGroup
Used in layout builder to define the location and configuration of Featured Content blocks.


## oc:ThemePreview
Used in theme builder to render and configure a site in theme preview mode.


## oc:UserDetailEditForm
Used on the Intranet to provide a form where staff are able to edit their own profile. `<oc:OcUserDetailEditForm/>`


## oc:UtilityBar
Renders the utility bar along the top of the page.

:::note

This tag is already part of the standard site template and already renders on every page.

:::
