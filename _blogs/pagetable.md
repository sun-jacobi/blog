---
title: 'Page Table In RISC-V'
date: '2022-8-26'
---

# Page Table In RISCV

### So what is page ?

Page is a method for translating virtual address to physical address. There is also a method called segmentation, which stores data as segment in the physical memory. Since the length of segment is not fixed, there must be some waste of memory. Then we need to introduce the *paging*.

consider the following Assembly code : 

```plaintext
movl <virtual address>, %eax
```

When using the virtual address, we need to first translate it into physical address. If we consider a general virtual address

```plaintext
virtual address = VPN :: offset
VPN <=> virtual Page number
```

What the above 'math' means that, a virtual address consists of VPN and offset. So when we look up this address, first use the vpn to get the corresponding physical page, then get the certain physical memory in this certain page.So page is just a block of memory with fixed size.

(Fun Fact : some time there are 2 terms called page and frame, especially in the database community. Frame here is simply the so-called physical page.

Here let us do some simple math. 

Consider a 32 bit address space.

```nasm
pow(2, 32) = (2 ^ 10) 
* (2 ^ 10) * (2 ^ 10) * 4
4KB = (2 ^ 10) * 4
number of page = (2 ^ 10) * (2 ^ 10)
```

It means that for a 32 bit virtual address, we need 20 bit to store the VPN. 

(Doing such kinda math by yourself, to make sure you actually understanding the concept)

Here we will do the case study based on the RISC-V (not the f\*\*k x86)

### Case Studies : RISCV

Assume we are running on Sv39 RISC-V, which means that we are only using the 39 bits of the whole 64-bit virtual address. Then we split it into `39 = 27 + 12`

27 is the size of  VPN, which means that we need $2^{27}$ PTE(age table entries). At the same time, the last 12 bits are the offset.

In each PTE,  there are a 44-bit address for the physical address. We will use the 44 + 12 = 56-bit address to find the physical address.

**Column**:
```
physical address 
= 44::Reserved::DAGUXWRV
where
U : userspace can access this address
W : CPU can write to this address
V : An entry for this virtual address exist
```
### How to store it ?

This is very simple, but not useful. 
Let us do some simple Math
```
pow(2, 27) * 64 bits
= pow(2, 27) * 8 bytes ~ 1GB!!!!
```
In order to resolve it, RISC-V use a 3-level page table to save space (while x86-64 use 4)
```
39 = 9 + 9 + 9 + 12
    l1 :: l2 :: l3 :: offset
```
Well, here we got a tree(The best structure in 
this world)
```
virtual -> l1 -> l2 -> l3 -> physical address
```
Since the number of bit for each level of table is 9, then each table contains 512 PTE.

You might already notice that, so-called 
`page fault` are errors occur in the translation.

In the hardware, each CPU will have a `stap` 
register, which contains the address for the 
root page-table