"use client";

import React from "react";

type Props = {
	schema: Record<string, any>;
};

export default function JsonLd({ schema }: Props) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}


