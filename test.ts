import {transform} from "npm:@swc/core@1.6.12";

const { code } = await transform("console.log(<div/>)", {
	"jsc": {
	  "parser": {
		"tsx": true,
		"syntax": "typescript"
	  }
	}
});

console.log("code", code)