# tag-based-search

A tag based search engine.

This package works as an mongoose middleware.

The engine will index all string values of any mongoose model you'll choose to index.
Indexing means tag will be created for each word (not including stop words).
Indexing happens after each document is saved.

The search function will then search the search tags and will return the matching documents and their models.

Please follow the bookstore example for an usage example.
