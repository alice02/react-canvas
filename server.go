package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type Location struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

type Data struct {
	Locations []Location `json:"locations"`
}

type Response struct {
	Data Data `json:"data"`
}

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		locations := []Location{
			{
				Name: "hoge",
				Type: "fuga",
			},
			{
				Name: "hoge",
				Type: "fuga",
			},
		}

		data := Data{
			Locations: locations,
		}

		response := Response{
			Data: data,
		}
		time.Sleep(1000 * time.Millisecond)
		w.Header().Add("Access-Control-Allow-Origin", "*")
		if err := json.NewEncoder(w).Encode(response); err != nil {
			panic(err)
		}
	})

	log.Fatal(http.ListenAndServe(":3000", nil))
}
