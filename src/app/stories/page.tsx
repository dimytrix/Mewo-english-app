import React from 'react'
import { Metadata } from 'next';
import metadataJson from '@/metadata/metadata.json'

export const metadata: Metadata = {
  title: metadataJson.pages.stories.title,
  description: metadataJson.pages.stories.description,
  authors: metadataJson.authors
};

const page = () => {
  return (
    <div>page</div>
  )
}

export default page