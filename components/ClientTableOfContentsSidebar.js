'use client'

import dynamic from 'next/dynamic'

const TableOfContentsSidebar = dynamic(() => import('./TableOfContentsSidebar'), { ssr: false })

export default function ClientTableOfContentsSidebar({ content }) {
  return <TableOfContentsSidebar content={content} />
} 