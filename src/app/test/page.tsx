'use client'

import { useOrganizationList } from "@clerk/nextjs"



export default function Test() {

  const { createOrganization } = useOrganizationList()

  const testCreate = async () => {
    const test = await createOrganization({ name: "test1", slug: "test1" })
    console.log('test', test)
  }

  testCreate()

  return (
    <h1>This is atest</h1>
  )
}
