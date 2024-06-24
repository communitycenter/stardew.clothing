import { Button } from "@/components/catalyst/button";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Select } from "@/components/catalyst/select";
import { Switch, SwitchField } from "@/components/catalyst/switch";
import { BorderBeam } from "@/components/magicui/beam";
import Image from "next/image";
import { Strong, Text, TextLink } from "@/components/catalyst/text";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="text-center">
          <Subheading>
            Upload your Stardew Valley save & generate your avatar!
          </Subheading>
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <div className="flex relative flex-col items-center justify-center w-full h-96 rounded-xl shadow-inner cursor-pointer bg-white dark:bg-neutral-950 dark:hover:bg-neutral-950/50 transition ease-in-out duration-150">
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   setSelectedFile(e.target.files ? e.target.files[0] : null)
              // }
              data-umami-event="Upload save"
            />
            <BorderBeam />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-12">
            <div>
              <Field>
                <Select name="status">
                  <option value="day">Day time background</option>
                  <option value="night">Night time background</option>
                  <option value="none">No background</option>
                </Select>
              </Field>
            </div>
            <div>
              <SwitchField>
                <Switch name="allow_embedding" defaultChecked />
                <Label>Public?</Label>
              </SwitchField>
            </div>
          </div>
          <div>
            <Button>Generate Farmer</Button>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <Heading>Recent uploads</Heading>
        <div className="grid grid-cols-4">
          <div className="bg-neutral-950 rounded-xl p-6 space-y-4">
            <Image
              src="https://upload.farm/static/images/12/1SnsT7/1SnsT7-m.png"
              height={1920}
              width={1040}
              className="rounded-md"
            />
            <div>
              <Strong>Farm name</Strong>
              <Text>Uploaded by @lafond</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
