import React from 'react'

import Link from 'next/link'

export default function index() {
  return (
    <div>
        <nav>
            <Link href={'../'}> 
                <a>
                    Go Home
                </a>
            </Link>
        </nav>
    </div>
  )
}
