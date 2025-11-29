import { Button } from "@/components/ui/button";
import Divider from "@/components/layout/divider";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function PaginationSection() {
  return (
    <div className="mt-5">
      <Pagination className="hidden md:block">
        <Divider>
          <PaginationContent className="border-t border-b border-white/50">
            <PaginationItem>
              <PaginationLink size="default" href="#" className="rounded-none!">
                <PaginationLink
                  size="default"
                  href="#"
                  className="rounded-none! font-anton-sc text-white/50 hover:text-black"
                >
                  1
                </PaginationLink>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                size="default"
                href="#"
                className="rounded-none! font-anton-sc text-white/50 hover:text-black"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                size="default"
                href="#"
                className="rounded-none! font-anton-sc text-white/50 hover:text-black"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="font-anton-sc border-white/50 text-white/50" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink size="default" href="#" className="rounded-none!">
                <PaginationLink
                  size="default"
                  href="#"
                  className="rounded-none! font-anton-sc text-white/50 hover:text-black"
                >
                  9
                </PaginationLink>
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Divider>
      </Pagination>
      <div className="block md:hidden">
        <Divider>
          <Button
            variant={"ghost"}
            className="rounded-none border-t border-b text-white/50"
          >
            Load More
          </Button>
        </Divider>
      </div>
    </div>
  );
}
