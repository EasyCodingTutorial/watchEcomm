"use client";
import React, { useEffect, useState } from "react";

import styles from "./UpdateWatchCompo.module.css";

// For Components
import {
    DropDownbox,
    InputBox,
    TextareaBox,
} from "@/Components/InputBox/InputBox";

// For Upload Thing
import { UploadDropzone } from "@/utils/uploadthing";
import Link from "next/link";
import { ButtonAnimation } from "@/Components/Animation/buttonAnimation/buttonAnimation";
import { useRouter } from "next/navigation";



interface DropDownProp {
    value: string,
    label: string,
}


const genderOption: DropDownProp[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
];

const WatchTypeOption: DropDownProp[] = [
    { value: "luxury", label: "Luxury" },
    { value: "casual", label: "Casual" },
];


// Getting The Data
const getWatchDataById = async ({ Id }: { Id: string }) => {
    try {

        const res: Response = await fetch(`/api/watches/${Id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.log("Something Went Wrong")
            return
        }

        return res.json()

    } catch (error) {
        console.log(error)
    }
}




export const UpdateWatchCompo = (
    { Id }: { Id: string }
) => {


    const router = useRouter()

    // For Input Field Values
    const [watchName, setWatchName] = useState<string>("");
    const [watchModelNumber, setWatchModelNumber] = useState<string>("");
    const [watchDesc, setWatchDesc] = useState<string>("");
    const [watchPrice, setWatchPrice] = useState<string>("");
    // For Now [TODO Logic For Discount]
    const [watchDiscount, setWatchDiscount] = useState<string>("");
    const [watchSKU, setWatchSKU] = useState<string>("");
    const [watchImgUrl, setWatchImgUrl] = useState<string>("");
    const [watchCaseMaterial, setWatchCaseMaterial] = useState<string>("");
    const [watchBrandMaterial, setWatchBrandMaterial] = useState<string>("");
    const [watchDialColor, setWatchDialColor] = useState<string>("");
    const [watchCaseDiameter, setWatchCaseDiameter] = useState<string>("");
    const [watchWarrantyPeriod, setWatchWarrantyPeriod] = useState<string>("");
    // For SEO
    const [watchSeoTitle, setWatchSeoTitle] = useState<string>("");
    const [watchSeoDesc, setWatchSeoDesc] = useState<string>("");

    // For Dropdown
    const [genderValue, setGenderValue] = useState<string>("");
    const [watchTypeValue, setWatchTypeValue] = useState<string>("");

    // For Field Validation
    const [fieldValidation, setFieldValidation] = useState<string>("");


    // For Error/Success Messages
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    // For Loading State
    const [loading, setLoading] = useState<boolean>(false)


    // 
    const [watchData, setWatchData] = useState<any>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getWatchDataById({ Id })
                if (data) {
                    setWatchName(data.WatchSpecificData.watchName)
                    setWatchModelNumber(data.WatchSpecificData.watchModelNumber)
                    setWatchDesc(data.WatchSpecificData.watchDesc)
                    setWatchPrice(data.WatchSpecificData.watchPrice)
                    setWatchDiscount(data.WatchSpecificData.watchDiscount)
                    setWatchSKU(data.WatchSpecificData.watchSKU)
                    setWatchImgUrl(data.WatchSpecificData.watchImgUrl)
                    setWatchCaseMaterial(data.WatchSpecificData.watchCaseMaterial)
                    setWatchBrandMaterial(data.WatchSpecificData.watchBrandMaterial)
                    setWatchDialColor(data.WatchSpecificData.watchDialColor)
                    setWatchCaseDiameter(data.WatchSpecificData.watchCaseDiameter)
                    setWatchWarrantyPeriod(data.WatchSpecificData.watchWarrantyPeriod)
                    setWatchSeoTitle(data.WatchSpecificData.watchSeoTitle)
                    setWatchSeoDesc(data.WatchSpecificData.watchSeoDesc)
                    setGenderValue(data.WatchSpecificData.gender)
                    setWatchTypeValue(data.WatchSpecificData.watchType)



                } else {
                    setLoading(false)
                    setErrorMessage("Failed To Fetch")
                    return
                }

            } catch (error) {
                setLoading(false)
                setErrorMessage((error as Error).message)
                return
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [Id])

    // console.log(watchData)



    // Onchange Handler for The Dropdown
    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGenderValue(event.target.value);
    };

    const handleWatchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWatchTypeValue(event.target.value);
    };



    const isValidate = (): boolean => {
        let isValidateForm = true;  // Set to true initially

        // Basic Information
        if (!watchName.trim()) {
            setFieldValidation("Enter Watch Name");
            document.getElementById("WatchName")?.focus();
            isValidateForm = false;  // Set to false if validation fails
        } else if (!watchModelNumber.trim()) {
            setFieldValidation("Enter Model Number");
            document.getElementById("watchNumber")?.focus();
            isValidateForm = false;
        } else if (!watchDesc.trim() || watchDesc.length < 10) {
            setFieldValidation("Enter a detailed description (min. 10 char)");
            document.getElementById("watchDesc")?.focus();
            isValidateForm = false;
        }
        // Price & Inventory
        else if (!watchPrice.trim() || isNaN(Number(watchPrice))) {
            setFieldValidation("Enter valid price");
            document.getElementById("watchPrice")?.focus();
            isValidateForm = false;
        } else if (!watchDiscount.trim() || isNaN(Number(watchDiscount))) {
            setFieldValidation("Enter valid Discount");
            document.getElementById("watchDiscount")?.focus();
            isValidateForm = false;
        }


        else if (!watchSKU.trim()) {
            setFieldValidation("Enter valid SKU");
            document.getElementById("watchSKU")?.focus();
            isValidateForm = false;
        } else if (!watchImgUrl.trim()) {
            setFieldValidation("Image is Required");
            isValidateForm = false;
        }
        // Watch Specification
        else if (!watchTypeValue) {
            setFieldValidation("Watch Type is Required");
            document.getElementById("WatchTypeDropDown")?.focus();
            isValidateForm = false;
        } else if (!genderValue.trim()) {
            setFieldValidation("Field is Required");
            document.getElementById("GenderDropDown")?.focus();
            isValidateForm = false;
        } else if (!watchCaseMaterial.trim()) {
            setFieldValidation("Enter Case Material");
            document.getElementById("watchCaseMaterial")?.focus();
            isValidateForm = false;
        } else if (!watchBrandMaterial.trim()) {
            setFieldValidation("Enter Brand Material");
            document.getElementById("watchBrandMaterial")?.focus();
            isValidateForm = false;
        } else if (!watchDialColor.trim()) {
            setFieldValidation("Enter Dial Color");
            document.getElementById("watchDialColor")?.focus();
            isValidateForm = false;
        } else if (!watchCaseDiameter.trim()) {
            setFieldValidation("Enter Case Diameter");
            document.getElementById("watchCaseDiameter")?.focus();
            isValidateForm = false;
        } else if (!watchWarrantyPeriod.trim()) {
            setFieldValidation("Enter Warranty Period");
            document.getElementById("watchWarrantyPeriod")?.focus();
            isValidateForm = false;
        } else if (!watchSeoTitle.trim()) {
            setFieldValidation("Enter SEO title");
            document.getElementById("SeoTitle")?.focus();
            isValidateForm = false;
        } else if (!watchSeoDesc.trim() || watchSeoDesc.length < 20) {
            setFieldValidation("Enter SEO description (min. 20 char)");
            document.getElementById("SeoDesc")?.focus();
            isValidateForm = false;
        }

        // Clear the validation message if everything is valid
        if (isValidateForm) {
            setFieldValidation("");  // Clear any previous validation message
        }

        return isValidateForm;
    };



    // For handleAddNewWatch
    const UpdateWatchData: React.FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();

        // Now Small Validation
        if (!isValidate()) {
            return
        }



        // if All Set Then 
        // API REQ TO ADD NEW WATCH
        try {
            setLoading(true);

            const res: Response = await fetch(`/api/watches/${Id}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    watchName,
                    watchModelNumber,
                    watchDesc,
                    watchPrice,
                    watchDiscount,
                    watchSKU,
                    watchImgUrl,
                    genderValue,
                    watchTypeValue,
                    watchCaseMaterial,
                    watchBrandMaterial,
                    watchDialColor,
                    watchCaseDiameter,
                    watchWarrantyPeriod,
                    watchSeoTitle,
                    watchSeoDesc
                })
            })
            if (!res.ok) {
                console.log(res.status)
                setLoading(false)
                setSuccessMessage("")
                setErrorMessage("Internal Server Error! Try Again")
                return
            }
            setLoading(false)
            setSuccessMessage("Watch Updated Successfully")
            setErrorMessage('')
            // Blank All The Fields
            setWatchName("")
            setWatchModelNumber("")
            setWatchDesc("")
            setWatchPrice("")
            setWatchDiscount("")
            // setWatchStoke("")
            setWatchSKU("")
            setWatchImgUrl("")
            setWatchTypeValue("")
            setGenderValue("")
            setWatchCaseMaterial("")
            setWatchBrandMaterial("")
            setWatchDialColor("")
            setWatchCaseDiameter("")
            setWatchWarrantyPeriod("")
            setWatchSeoTitle("")
            setWatchSeoDesc("")
            router.push('/Admin/Watches')
            return


        } catch (error) {
            setLoading(false)
            console.log(error)
            setErrorMessage("Something Went Wrong! Try Again")
            return
        } finally {
            setLoading(false)
        }


    };




    return (
        <div className={styles.AddNewWatch}>
            <div className={styles.Row}>
                <h2>Update Watch</h2>
                <form onSubmit={UpdateWatchData} >
                    <div className={styles.Content}>
                        <h5>Basic Information</h5>
                        <InputBox
                            labelText="Watch Name"
                            value={watchName}
                            Id="WatchName"
                            InputType="text"
                            onchange={(e) => setWatchName(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Watch Name" ? fieldValidation : ""
                            }
                        />

                        <InputBox
                            labelText="Watch Brand"
                            InputType="text"
                            Id="watchBrand"
                            value="Easy Luxury Watch"
                            disabaled={true}
                        />
                        <InputBox
                            labelText="Watch Model Number"
                            InputType="string"
                            Id="watchNumber"
                            value={watchModelNumber}
                            onchange={(e) => setWatchModelNumber(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Model Number" ? fieldValidation : ""
                            }
                        />

                        <TextareaBox
                            labelText="Watch Description"
                            Id="watchDesc"
                            value={watchDesc}
                            onchange={(e) => setWatchDesc(e.target.value)}
                            fieldValidation={
                                fieldValidation ===
                                    "Enter a detailed description (min. 10 char)"
                                    ? fieldValidation
                                    : ""
                            }
                        />

                        <h5>Pricing & Inventory</h5>
                        <InputBox
                            labelText="Watch Price"
                            InputType="number"
                            Id="watchPrice"
                            value={watchPrice}
                            onchange={(e) => setWatchPrice(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter valid price" ? fieldValidation : ""
                            }
                        />

                        <InputBox
                            labelText="Watch Discount"
                            InputType="number"
                            Id="watchDiscount"
                            value={watchDiscount}
                            onchange={(e) => setWatchDiscount(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Valid Discount" ? fieldValidation : ""
                            }
                        />

                        <InputBox
                            labelText="Watch SKU"
                            InputType="string"
                            Id="watchSKU"
                            value={watchSKU}
                            onchange={(e) => setWatchSKU(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter valid SKU" ? fieldValidation : ""
                            }
                        />

                        {/* For UPLOAD THING */}
                        <div className={styles.ParentUploadThing}>
                            <label htmlFor="">Upload Watch Images</label>
                            <span>
                                {
                                    fieldValidation === "Image is Required" ? fieldValidation : ''
                                }
                            </span>
                            <div className={styles.ImgUploader}>
                                <UploadDropzone
                                    appearance={{
                                        container: {
                                            height: 250,
                                            width: 250,
                                        },
                                        uploadIcon: {
                                            color: " rgb(184, 77, 11)",
                                        },
                                        label: {
                                            color: " rgb(184, 77, 11)",
                                        },
                                        allowedContent: {
                                            color: " rgb(184, 77, 11)",
                                        },
                                        button: {
                                            background: "rgb(184, 77, 11)",
                                        },
                                    }}
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        // Do something with the response
                                        // console.log("Files: ", res);
                                        // alert("Upload Completed");
                                        setWatchImgUrl(res[0].url);
                                    }}
                                    onUploadError={(error: Error) => {
                                        // Do something with the error.
                                        alert(`ERROR! ${error.message}`);
                                    }}
                                />

                                {
                                    watchImgUrl && (
                                        <div className={styles.ImgContentUploadThing}>
                                            <Link href={watchImgUrl} target="_blank">
                                                <img src={watchData?.watchImgUrl} alt="" loading="lazy" />
                                            </Link>
                                        </div>
                                    )
                                }



                            </div>
                        </div>
                    </div>

                    <div className={styles.Content}>
                        <h5>Watch Specification</h5>
                        <DropDownbox
                            labelText="Watch Type"
                            Id="WatchTypeDropDown"
                            options={WatchTypeOption}
                            value={watchTypeValue}
                            onchange={handleWatchTypeChange}
                            fieldValidation={
                                fieldValidation === "Watch Type is Required" ? fieldValidation : ""
                            }
                        />
                        <DropDownbox
                            labelText="Watch For"
                            Id="GenderDropDown"
                            options={genderOption}
                            value={genderValue}
                            onchange={handleGenderChange}
                            fieldValidation={
                                fieldValidation === "Field is Required" ? fieldValidation : ""
                            }
                        />
                        <InputBox
                            labelText="Watch Case Material"
                            InputType="text"
                            Id="watchCaseMaterial"
                            value={watchCaseMaterial}
                            onchange={(e) => setWatchCaseMaterial(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Case Material" ? fieldValidation : ""
                            }
                        />{" "}
                        <InputBox
                            labelText="Watch Brand Material"
                            InputType="text"
                            Id="watchBrandMaterial"
                            value={watchBrandMaterial}
                            onchange={(e) => setWatchBrandMaterial(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Brand Material" ? fieldValidation : ""
                            }
                        />
                        <InputBox
                            labelText="Watch Dial Color"
                            InputType="text"
                            Id="watchDialColor"
                            value={watchDialColor}
                            onchange={(e) => setWatchDialColor(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Dial Color" ? fieldValidation : ""
                            }
                        />
                        <InputBox
                            labelText="Watch Case Diameter"
                            InputType="text"
                            Id="watchCaseDiameter"
                            value={watchCaseDiameter}
                            onchange={(e) => setWatchCaseDiameter(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Case Diameter" ? fieldValidation : ""
                            }
                        />
                        <h5>Additional Features</h5>
                        <InputBox
                            labelText="Watch Warranty Period"
                            InputType="text"
                            Id="watchWarrantyPeriod"
                            value={watchWarrantyPeriod}
                            onchange={(e) => setWatchWarrantyPeriod(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter Warranty Period" ? fieldValidation : ""
                            }
                        />
                        {/* TODO UploadThing */}
                        {/*  */}
                        <h5>SEO & Material</h5>
                        <InputBox
                            labelText="Seo Title"
                            InputType="text"
                            Id="SeoTitle"
                            value={watchSeoTitle}
                            onchange={(e) => setWatchSeoTitle(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter SEO title" ? fieldValidation : ""
                            }
                        />
                        <TextareaBox
                            labelText="SEO Description"
                            Id="SeoDesc"
                            value={watchSeoDesc}
                            onchange={(e) => setWatchSeoDesc(e.target.value)}
                            fieldValidation={
                                fieldValidation === "Enter SEO description (min. 20 char)" ? fieldValidation : ""
                            }
                        />
                        <button type="submit" className={styles.Btn}>
                            {
                                loading ? (
                                    <ButtonAnimation>
                                        Updating....
                                    </ButtonAnimation>
                                ) : ('Update Watch Now')
                            }
                        </button>

                        {
                            errorMessage && (
                                <p className={styles.ErrorMessage}>
                                    {errorMessage}
                                </p>
                            )
                        }

                        {
                            successMessage && (
                                <p className={styles.SuccessMessage}>
                                    {successMessage}
                                </p>
                            )
                        }

                    </div>
                </form>
            </div>
        </div>
    )
}
