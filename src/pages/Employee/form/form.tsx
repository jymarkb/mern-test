import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import fetchCountries from "@/pages/actions/Employee/fetchCountries";
import fetchAcountType from "@/pages/actions/Employee/fetchAccountType";
import React, { useEffect, useState } from "react";
import { CountryType, AccountType, EmployeeType } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  fallbackImage,
  handleImageChange,
  handleTel,
} from "@/pages/actions/Employee/validate";
import { Separator } from "@/components/ui/separator";
import {
  CreateEmployee,
  UpdateEmployee,
} from "@/pages/actions/Employee/actionEmployee";
import { useNavigate, useParams } from "react-router-dom";
import getEmployeeById from "@/pages/actions/Employee/fetchOneEmployee";

const EmployeeForm = ({ params }: { params: string }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<CountryType[] | null>(null);
  const [type, setType] = useState<AccountType[] | null>(null);
  const [previewSrc, setPreviewSrc] = useState("");
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState<EmployeeType | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (params === "create") {
        await CreateEmployee(e);
      } else {
        await UpdateEmployee({ e: e, target: String(id) });
      }
      navigate("/employee");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = handleImageChange(e);

    if (!isValid) {
      setPreviewSrc("");
    }

    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewSrc(imageUrl);
    }
  };

  useEffect(() => {
    const getDropdownAndEmployee = async () => {
      try {
        const [countryData, typeData] = await Promise.all([
          fetchCountries(),
          fetchAcountType(),
        ]);
        setCountries(countryData);
        setType(typeData);
        
        if (id) {
          const data = await getEmployeeById(id);
          setEmployeeData(data);

          if (data) {
            setPreviewSrc(`/upload/${data.photo}`);
            setSelectedCountry(String(data.countryId));
            setSelectedType(String(data.typeId));
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getDropdownAndEmployee();
  }, [id]);

  return (
    <div className="wrapper flex justify-center">
      <div className="w-full max-w-[90%] mt-8">
        <h1 className="text-xl bg-secondary p-2 text-primary">
          <span>Account: </span>
          <span className="text-orange-300">
            {id ? "Update Record" : "Add Records"}
          </span>
        </h1>

        <form
          className="form-wrapper flex justify-center mt-20"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="form-container w-full max-w-3xl grid gap-4 grid-cols-[200px_1fr]">
            <div className="flex items-center">
              Country <span className="text-red-500">*</span>
            </div>
            <div>
              <Select
                required
                name="countryId"
                value={selectedCountry}
                onValueChange={(val) => setSelectedCountry(val)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="h-[250px]">
                    {countries ? (
                      countries.map((item, index) => {
                        return (
                          <SelectItem key={index} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem value="null">
                        Error Loading Country....
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              Account Type <span className="text-red-500">*</span>
            </div>
            <div>
              <Select
                required
                name="typeId"
                value={selectedType}
                onValueChange={setSelectedType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {type ? (
                      type.map((item, index) => {
                        return (
                          <SelectItem key={index} value={String(item.id)}>
                            {item.type}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem value="null">
                        Error Loading Country....
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              Username <span className="text-red-500">*</span>
            </div>
            <div>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder=""
                required
                className="placeholder:text-foreground"
                defaultValue={employeeData?.username}
              />
            </div>
            <div className="flex items-center">
              Last Name <span className="text-red-500">*</span>
            </div>
            <div>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder=""
                required
                className="placeholder:text-foreground"
                defaultValue={employeeData?.lastname}
              />
            </div>
            <div className="flex items-center">
              First Name <span className="text-red-500">*</span>
            </div>
            <div>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder=""
                required
                className="placeholder:text-foreground"
                defaultValue={employeeData?.firstname}
              />
            </div>
            <div className="flex items-center">
              Email Address <span className="text-red-500">*</span>
            </div>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder=""
                required
                className="placeholder:text-foreground"
                defaultValue={employeeData?.email}
              />
            </div>
            <div className="flex items-center">
              Contact Number <span className="text-red-500">*</span>
            </div>
            <div>
              <Input
                id="number"
                name="number"
                type="tel"
                inputMode="numeric"
                pattern="[0-9+ ]*"
                required
                onInput={(e) => handleTel(e)}
                className="placeholder:text-foreground"
                defaultValue={employeeData?.number}
              />
            </div>
            <div className="flex items-center gap-2">
              Photo<span className="italic">(optional)</span>
            </div>
            <div>
              <label
                htmlFor="photo"
                className="inline-block cursor-pointer rounded bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
              >
                {previewSrc ? "Upload New Photo" : "Upload Photo"}
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {previewSrc && (
              <>
                <div></div>
                <div>
                  <img
                    src={previewSrc}
                    alt="Preview"
                    height={200}
                    width={200}
                    onError={(e) => fallbackImage({ e: e, src: "" })}
                  />
                </div>
              </>
            )}

            <div className="col-span-2 mt-4 mb-4">
              <Separator orientation="horizontal" className="h-full" />
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-primary py-2 rounded text-white w-[200px] cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
