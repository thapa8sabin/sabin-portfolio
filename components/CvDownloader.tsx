'use client'

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const handleDownload = (): void => {
    window.open("/assets/cv.pdf", "_blank")
}

const CvDownloader = () => {
    return (
        <Button
            variant={"outline"}
            size={"lg"}
            className="uppercase flex items-centerg gap-2"
            onClick={handleDownload}
        >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
        </Button>
    )
}

export default CvDownloader