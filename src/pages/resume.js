import { Document, Page } from 'react-pdf'
import resume from '../assets/documents/Robert_Sheffield_Resume.pdf'

export default function Resume() {
    return (
        <div>
            <Document file={resume}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}