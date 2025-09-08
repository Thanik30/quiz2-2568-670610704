import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer(props : FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        <footer className="text-secondary text-center p-2 bg-light mt-auto">
       © {props.fullName} {props.studentId} {props.courseName }-{props.year}. All rights reserved.  
      </footer>
      </Text>
    </Group>
  );
}
