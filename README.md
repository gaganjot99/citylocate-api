# citylocate-api

 * #### Api that returns the _gps cordinates_ of one of the major indian cities
 * #### _Autocomplete_ names of cities with any number of characters provided
 * #### A _Graphql_ endpoint provided for the above functionality

## For GPS coordinates

#### GET request to https://citylocate.herokuapp.com/:nameoftheCity

For Example:

A GET Request For **"Mumbai"**:

``
https://citylocate.herokuapp.com/mumbai
``

#### _Returns_ 

```sh
{
	"data": {
		"lat": 19.07609,
		"lng": 72.877426
	}
}
```

----


## For AutoComplete

#### GET request to https://citylocate.herokuapp.com/autocomplete/:initialsOfTheCity

For Example: 

A GET Request For "A":

``
https://citylocate.herokuapp.com/autocomplete/a
``

Returns:

```sh
{
	"data": [
		"ahmedabad",
		"agra",
		"aurangabad",
		"amritsar",
		"ajmer"
	]
}
```

## Graphql Endpoint


#### EndPoint: https://citylocate.herokuapp.com/graphql

Query Name: city  
input: name

For example:

```sh
query {city (name: "mumbai"){
	lat
	lng
}}
```

Returns


```sh
{
	"data": {
		"city": {
			"lat": 19.07609,
			"lng": 72.877426
		}
	}
}
```


