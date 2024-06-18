---
title: VTEX Admin string standardization for English
description: .
---

VTEX Admin string standardization for English

VTEX Admin string standardization for English
=============================================

The VTEX Admin strings were fully reviewed as proposed in the [2022 third-quarter OKR](https://docs.google.com/document/d/1Lnk7BKdQkfrol0EwmSOYWvV2C99Bk-iu_00p6sIMYHI/edit#heading=h.lezk5phgz6d0) of the Localization team. During this process, we applied grammar, tone, and voice corrections to offer a consistent experience for our users throughout platform strings. The review implemented patterns specified in our [Localization style guides](https://www.notion.so/vtexhandbook/Style-Guides-a05a5cd05987404aab544032292d6bd2), the CAT tool integrated Localization glossary, VTEX [UX Writing Guidelines](https://uxwriting.vtex.com/docs/), as well as naming and standardization discussions with PMs. In this document, we have included the main reference and standardization points that were applied during the review and that should be maintained in Admin strings.

### Capitalization

These patterns were adopted from the [Voice Chart](https://uxwriting.vtex.com/docs/principles/voice-chart) available in the UX Writing Guidelines.

UI Element

Case

Note

Table column header

Title

Tabs

Title

Buttons

Title

Unless it's a sentence. Many buttons in the UI display as all caps as recommended in the UX Writing guidelines, but many do not, so it is important to standardize them at the string level.

Page title

Title

Main (sde) menu

Title

Drop down menu

Title

Modal title

Title

Links

Sentence

Graph labels

Sentence

Counter label

Sentence

Date filters

Sentence

7 hours ago, This week, etc.

Show all

Sentence

View all

Sentence

Labels

Sentence

### Grammar forms

*   When naming menu items, remember that in EN, [nouns acting as adjectives](https://www.englishclub.com/grammar/nouns-adjective.htm) are used in the singular form. This especially applies to pages with “management” in their name: Offer Management, Affiliate Management, Order Management. Other examples are Custom Order Attributes, Order Authorization, and SKU Bindings.

### Lexical preferences

*   Email, not e-mail. Do not hyphenate.
*   Ecommerce, not e-commerce. Do not hyphenate.
*   “Register”, often used to render the PT cadastrar, was replaced by add in most instances. When referring to elements that are already in the system, existing is an alternative or simply referring to the element (omitting cadastrados). “This will delete all \[existing\] users” is an example. Register a domain and registration form are valid, however, in this latter case, the concept should be paired with adding/creating/signing up, in other words, you complete a registration form to add a user or create an account.
*   EN makes a distinction between “data” and “information”/”details”. In a registration forms, always use information, like “User information”. Data applies to data sets like “sales performance data.”
*   Boleto is a payment method that is specific to Brazil. It has no equivalent in the US. It had often been translated as “bank slip,” but this concept does not exist and may be confused with a “deposit slip,” which is a paper you fill out to make a deposit, which is the majority of the results you get if you search “bank slip.” For this reason, we decided to change all instances to boleto. That way, if a user sees this option and is unfamiliar with this payment method, they will easily get an explanation if they search “What is boleto?,” which indeed, yields many informative articles in EN. “Boleto bancário” is also standardized to boleto.
*   “Listing” was changed to list. In general, a “listing” is an entry in a marketplace that the end customer sees. It is not wrong to use it to mean “list,” but to be consistent, it was changed to list throughout the Admin.
*   “Value” when referring to money, especially in the context of orders and invoices, has been standardized to amount. For other numbers and fields, value is valid (example: “specification value: green”, “maximum value for number of rows”).
*   Use enter and complete for user input of “type”, “fill in,” or “insert”. Enter applies when adding something to a field, like “enter the ID”. Complete is often used for more than one or general input, like “completing a form” or “complete the fields”.
*   As a button taking you to another view, view is the preferred verb instead of “see”.
*   “Freight” and “shipping” were standardized to shipping.
*   The phrase “Do you really want to…” was updated to the more generally used Are you sure you want to…
*   The term “profile” was updated to “role” for user permissions as per the official change in terminology described in this [announcement](https://help.vtex.com/en/announcements/el-termino-access-profile-ha-sido-sustituido-por-role-en-la-interfaz-del--jSmEYL6oN5QFLA20a8Aj9?&utm_source=autocomplete).
*   The sentence placement of “here” was corrected. “Click here to” is a standard phrase, but in longer sentences, “here” is preferred at the end of the sentences: “Drop your file here” not “Drop here your file” or “Enter your message here” not “Enter here your message.”
*   “Search for” in the sense of “search using an attribute” to get a result set was corrected to Search by \[ID, name, etc.\]. If it is a placeholder, it can be shortened to simply search.
*   “Created at” was corrected to Created on. “On” is the right preposition to indicate a date (month and day or day). “At” is used to indicate time (hour).
*   “Inform” is a false cognate from PT when prompting the user to provide information. This term was replaced by indicate or enter as a appropriate.
*   Trade policy was confirmed was the current official name for this module and agreed with the PM (Matheus Furtado). Any instances of “commercial policy”, “sales policy,” and “sales channel” were updated to reflect this decision. This module presents a scope challenge that has made it difficult to define a name that encompasses all that the module does. This guided our decision to keep the current term. Keep in mind that “sales channels” may be a valid term in other contexts.
*   Edit is the preferred term for indicating the action of making changes, “modify” and “change” were changed to edit.
*   Following the UX writing guideline to “not alarm the user,” “warning” was replaced by attention in warning messages.
*   The false cognate “emission” (especially when referring to invoices) was corrected to issue.
*   Postal code is preferred to “zip code,” which is US specific. Both are accepted terms in EN.
*   “Responsible,” a PT cognate, is not a natural construction in EN. Correcting it often requires the use of a concrete role. “Contact” or “admin” are some examples.
*   “Voucher” was confirmed to be gift card in all cases, and it was updated accordingly.
*   In the context of software, provider is preferred instead of “supplier,” which applies more to physical goods.
*   The spelling of occurred (double c and double r) was corrected throughout many instances of this term.
*   In a list of options, other should be used in the singular to mean options not captured in the list. “Others” is a false cognate from PT.
*   Units doesn’t have an abbreviation (due to it being a very short words). That mean “un.” is not valid, so it was substituted with unit or unit(s) as appropriate.
*   “Promissory note” was standardized to notes payable.
*   “Telephone” was updated to phone, which is more common.
*   “Complement” as an address field, which is a false cognate from PT, was changed to additional information.

CONTENT

*   [Introduction](#introduction)
*   [Capitalization](#capitalization)
*   [Grammar forms](#grammar-forms)
*   [Lexical preferences](#lexical-preferences)