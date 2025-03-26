"use client";
import { useState, useEffect } from "react";

export default function Logger() {
	const [visitors, setVisitors] = useState(0);

	useEffect(() => {
		async function initLogger() {
			const body = {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					clientSecret: "d34314a1-ef9e-46e9-85c1-0d75e48b5325",
					applicationId: "e7d77b0a-e665-4686-a17f-e7e633aec624",
				}),
			};
			const res = await fetch(
				"https://logger-mocha-six.vercel.app/api/logger/v1",
				body
			);
			const json = await res.json();
			if (res.status === 200) {
				setVisitors(json);
			} else {
				// error
				console.log(json);
			}
		}
		initLogger();
	}, []);
	return (
		
        <>
      </>
	);
}
