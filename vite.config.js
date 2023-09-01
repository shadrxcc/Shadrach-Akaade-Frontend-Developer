/* eslint-disable linebreak-style */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	parserOptions: {
		ecmaVersion: 2021,
	},
	plugins: [react()],
})
