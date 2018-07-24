
Cloud Computing
- On Demand
- Broad Network
- Resource Pooling
Rapid Elasticity
Measured Server

Every company is a data company.

Virtual data center.

Raw computer  -> Infrastructure as a service (IAAS).
- Pay as you allocate

App code to libraries to data -> Platform as a service (PaaS)
- Pay as you go.

Zone - Region - Data center

Roundtrip 5 milliseconds
- Make things fault tolerant by spreading to multiple zones

Platform as a Service
- Multiregional = redundant systems

15 Regions (Data centers use 2% of world's energy)
- Billed by the second instead of rounding to nearest minute

Kubernetes - container infrastracture

Hadoop

App Engine -> Platform as a service (use of VMs)


GCP -
open source convertible
-> Not trapped into one vendor

Kubernetes - ability to mix and match various microservices across different cloud providers

Stackdriver - manages and monitor across different cloud

-----

GCP - build test and deploy the cloud
Multilayered Security
- Server/Databoards
- Designed by Google
Hardware Security chip (Titan)
Physical security
- Accesss only available to a small subset of people
Cryptographic communication
- rPc data in transit

Red (Orange) team exercises, simulated exercises
- U2F security, phishing

-Vulnerability reward program

# What's new in GCP
## Project
- IAM - control for admins
- group related business services
- Giving lease amount privileges, only privileges nesseceary for job

Interacting with GCP
1.) Console - web
2.) Cloud shell/ SDK
3.) Mobile App
4.) Rest based API

Resources -> Projects -> Folders -> Directories -> Org Node
- Policies inherited from parent

Project Ids are always unique
- Names are nicknames, whatever

More generous policies overrides (IMPORTANT)

## Identity Access Management
- Who can take actions
- Who, what, what resources.
- Who = Google Account, GSuit Domain group
- What = Collection of permissions
- What Resources = Start/ Stop Permissions

# Roles
## Primitives
- Owner
- Editor
- Viewee (View Only)
- Billing (W/out change resource abilities)

## Pre-defined set of roles, can be applied to folder, organization, etc.
- ie.) Big Table - part project, Big Table- instance

## Fine grained permissions
- List
- Delete
- Get
- Set Machine type
- Start
- Stop

## Minimum amount of rules necessary for their job.
- Start/ stop

- Only at project, or org level; not folder level

## Service Account
- Controls server - server interactions
- Carry server- server comms
- authenticate one service to another
- control privileges used by services

## Create Service Account to authenticate your virtual machine to cloud storage
- identified by an email address, project_number, project_id
- use crypto keys instead of passwords
- needs to be managed
- Also a resource
- Different VMs = different permissions for groups

# Interacting with GCP
## SDK - set of tool to manage
- GCP Shell- main command line interface for GCP
- gsutils
- big query

## Restful API
- uses JSON, urls, pass info like web browsers
- console = turn on and off APIs, limit

## APIs explorer
- Cloud launcher = quick solution
- Solution marketplace containing pre-packaged ready to deploy solutions

## Editable Before deployment
- No additiaonl charge underneath normal usage fees
- Commercially avail. licenses
- LAMP - Linux, Apache, mySQL, PHP

## Virtual Machine
- Fully fledged OS -editable
- CPU/ memory/type of storage
- Network connection

## Virtual Private Cloud
- Connect GCP resources
- Static routes
- Global scope
- Subnets within regions
- Span zones
- Different Resources
- Expand subnets by IP

## VPC - one network
- Can have neighboring subnets, two compute engines, in different zones
- great network layers

- no upfront costs:
- VM can be either windows, linux and can import images
- machine type - very small (free f1 micro) to large
- custom VMs
- Can add GPUs for data processing
- Disks: Standard Disk, Solid State Drive, Local SSD, Persistent Disks

(Startup scripts - Apps)
(Snapshops - used to migrate backups)
(Preemptive VMs - Compute engine, delete this VM when its needed in another region/Cheaper)

## Preset Memory, CPUs, etc.
- Scaling out, not scaling up, balancing loads.

## VPC capabilities
- Routing Tables - We use them to forward traffic from one instance to another
- Firewall, metadata tags
- VPC belong to GPC projects
--- Cloud Load Balancing
---- in front of your traffic,
---- HTTP/ TCP,
---- cross region/ subregion
---- moves traffic, if region is down

## HTTPS Load balancer
- Cross regional load balancer for web app
- Cloud CDN - Partner program

## Secure Socket
- SSL Load balancing
- proxy load balancer
- non HTTPS

## TCP
- Global TP proxy
- Particular port
- non SSL

## Load balancing Internal (internal IP)
- 8.8.8.8 free by Google
- DNS translates the internet hostnames into addresses
- Cloud DNS - same infrastracture - low latency; high availability.
 - GCP consoles
 - API
 - CDN (edge caching)

## Cloud Router - enables dyanmic gateway protocol to access the topography of a VPC with an onsite premise network
- share route information over VPN
    - Provides Border Gateway Protocol (BGP)
        - Dynamically discover/ advertise
    - Standard routing features
        - As a path
        - As a prepend

- enables dynamic VPC use
- ie.) Add subnet to VPC + on premise network will get routes to be seen

# Elastic Cloud Infrastucture
    - Scaling/ Automation

## Dedicated Cloud Interconnect
- Acting as a intermediary network service provider
    - Backup / low latency; sensitive / lower costs between Google and you
    - Direct connection with on-premises Google, may be cheaper than ISP
    - Large amount of data transfer
        - Will be cheaper than public internet
        - Dedicated network, less drops; internal connections/ on premises
        - 10 GB/ sec * 8 connections
            - Minimum agreement: 10 GB/ sec; if throughput is less, consider Google VPN
            - Client must meet at colocation facility (physical), singe mode Fiber
            - Client will order and operate circuits
- VPN
    - One or more secure tunnels
- Physical connection, lower latency, higher availability.
- Great for companies that have data intensive apps.

## GCP Networking
- Global fiber backbone/ networking
    - HTTP, UDP, TCP. Load Balancer
    - Cloud CDN
    - Cloud DNS
- Virtual Networks
    - SDN Network visualization
    - Granular subnetworks
    - Hybrid (Cloud VPN routes, interconnect)

## Google Cloud VPN
- Securely traffic netowkr to your on premise network to your GCP VPC via your IPSec VPN
    - Encrypted by one gateway, decrypted by another VPN gateway
    - SLA of 99% availability
    - VPN on GCP = Software
    - With static routing, updating the tunnel require the additional use of static routes; restart needed to include subnet

## Cloud DNs - 100% SLA
- API/ Web zone
- Managed zones
    - Manages all DNS Records for single domain name
    - One project may have multiple managed zones
    - Mut be enabled first
    - Permissions = project level
        - Monitor propogation of changes to DNS name services

## External Peering
### Direct Peering - connect any business network to Google
- Customer doesn't want to use the public internet
    - Peering = router in same public data center as a google point of presence, exchanging traffic
- Connect your business network directly to Google at any of 100+ locations in 33 countries around the world and exchange high throughput cloud traffic.
- Allows you to establish a direct peering connection between your business network and Google’s.
    - Be able to exchange Internet traffic between your network and Google’s at one of our broad-reaching Edge network locations.

- Direct peering with Google is done by exchanging BGP routes between Google and the peering entity.
    - After a direct peering connection is in place, you can use it to reach all of Google’s services including the full suite of Google Cloud Platform products.
- Google - [] - [] - Corporation
- Border Gateway Protocol (BGP) -
   - Route traffic coming through ISP who are assigned their own ASN
   - Shared VPC
        - Share GCP GCP networks across projects
            - Apply, enforce consistent policies
- Not covered by SLS

### Carrier Peering
- higher avail
- lower latency
- enterprise grade network servers using server proxies.
- For access to Google applications, such as G Suite, you can obtain enterprise-grade network services that connect your infrastructure to Google by using a service provider.
- When connecting to Google through a service provider, you can get connections with higher availability and lower latency, using one or more links. Work with your service provider to get the connection you need.
- Use case:
    - To access G Suite applications from an on-premises network, an organization might need a DMZ (perimeter network) to reach Google's network.
    - Enables organizations to expose an isolated subnetwork to the public Internet instead of their entire network.
    - Instead of setting up and maintaining a DMZ, the organization can work with a service provider so that their traffic travels on a dedicated link from their systems to Google.
    - With the dedicated link, the organization gets a higher availability and lower latency connection to Google's network.

## Managed Instance Groups
- Deploys identical instance based on instance template
    - Load Balancer
    - Instance crashes/ deletes without Group instance commands
        - Recreates that same instance name, resumes its tasks
    - Auto identifies unhealthy instances in a group
    - Regionally managed zones
        - Autoscaling
        - Network Load balancing
        - HTTPS Load Balancer
    - Create Instant Template === Easy
        - Zones, ports, autscale, minumum number, health check
            - Health check
                - Specified period
                - Conditions (if, then)
                - Consecutive probes
                - Determines if instance can receive new data connections
            - Redundant Health checks
                - Follows your settings
                - Un-configurable , auto created
                - Checks more frequently
    - Auto scales
        - Add/ deletes instance in peak and lull loads
    - Downscale
        - Connection drain
            - New = Blocked
            - Old = Closed
                - Preserves existing sessions until they end


# Load Balancers
## HTTPS Load Balancing
- Use SSL or use SSL Load Balancing
- Global Load balancing for HTTP(s) requests destined for your instance
    - Can configure URL rules to route to one set of instances
    - Requests are always routed to instance group closest to user
    - IPV4 / IPV6 - Supported Terminated at Global
- Balancing mode influenced whether backend instance group at capacity
    - Load Balancer Tests
        1.) CPU Utilization
        2.) Max request per sec. per instance
        3.) CPU utilization/ rate
    - Capacity Scaler
        - Additional setting - directs the load balancer to only direct requests to given backend
    - Session affinity
        - One url = one instance
- URL Maps
    - Direct traffic to different instances based on incoming URL
        - Designates which requests to send where

## Cross-Region Load Balancer
- HTTP/ HTTPS - closest regions, eliminates DNS load balnacer
    - Multiple region/ zones

## Content Based Load Balancer
- Create multiple backend services
- Add path rules
    - /video
    - /static

## SSL Proxy/ TCP Proxy
- Global load balancer - nearest with capacity
    - Advantages:
        - Intelligent Routing
        - Certification management
        - Better utilization of VM
        - Security patch
- TCP
    - Single IP for all users
        - Intelligent
        - Security Patch

## Network Load Balancing
- Balance load of systems based on IP protocol data
    - Uses forward rules that point to target pools
        - List of instances availbe for load balancing
        - Define what type of health checks
- Passthrough load balancer
- Managed Instance group
    - Target pool can have different instances
    - Managed pool === all the same typeof VM
    - Autoscaler
        - Own rules, do we spin up more VMs within target pool
- Target pool
- 50, limit, 1 health check
- Instance template
- Session affinity
    - Affects load distribution
    - Possible hashes = source/ destination of port

## Internal Load balancing
- Behind private load balancer/ internal UPC

## Load balancer Best practices
- Multiple zones in regions, zones are random, rebalance
- Overprovision; prepare for failure
    - 150% for full service during an full service outage
### Autoscaler Best Practices
    - Don't use maxRate on backend
    - Don't make autoscaled Managed Instance Group (MIG) the target of 2 different load balancers
        - Use managed instance groups to create homogeneous groups of instances so that load balancers can direct traffic to more than one VM instance in case a single VM becomes unhealthy.

- Testing
    - Create failures
        - Auto Tag with "failure_zone" removed
    - Do not put one VM connected to two instances
    - Do not share instance group with two different backends
    - All instance in the same VPC group

## Autoscaling
- Instructions manages instance groups
- Automatically scales the number of instances ina  manged group based on a specified type of workload
    - Reduces cost because it can shrink the number of instances running
    - One autoscaler per managed instance group
    - VM across different multiple zones withina  region
        - Autoscales those proportionally
    - One minute windows
## Policies
- Multiple policies (max 5)
    - Falls to one with most VM policy
- Avg CPU utilization
- HTTP load balancing servicing capcity target utilization
    - Max CPU utilization
    - Max requests per instance/ second
- Stackdriver standard / custom metrics
- Example:
    1.) Instance Template
    2.) Create managed instance group
    3.) Create Autoscaler
    4.) Define multiple policies for autoscaler

## Infrastracture Automation - Consistetn Repeatable Process
- Base Images (Synchronous) -> Running VM -> Snapshop on Bootdisk
    - Snapshots are global resources, can't be shared between proejcts
    - Custom images - between proejcts
        - OS/ System = custom
        - Baked => faster to become available, lack app, prevent change
        - Golden - Setting are just right; ready for sharing
    - Startup scrips
        - Boot time configs, persistent environment
        - Which software to install on the fly
        - Metadata survives
    - Instance templates => Identical VMS
    - Auto Scaler + managed instance groups => Horizontal Scalability

- Images
    - Import external images
    - Persistent Disks = zonal
    - Snapshot -> global
        - Disk from snapshot => VM
    - Local VM => Bucket update => start VM from bucket image => ?

- Metadata
    - Starting VM; visible to all VM in project
    - Instance hostname
    - External IP address
    - Key: value pairs

- Scripts
    - Startup (Pre)
    - Shutdown (Post) / BEst effort
    - Windows (GSS public)
    - Startup can be run after reboot

### Deployment Manager
- Infrastrucuture Automation
    - Chef/ Puppet/ Terraform/ Cloud Formation
    - Declarative
    - Hosted
    - Driven by Discovery/ Swagger
        - Deployment Manager ‘knows’ about your API server by consuming a swagger 2.0 specification describing your API that you need to provide to it during setup.
- Configuration
    - YAML files
        - Bidirectional (Receives / sends data)
        - Expanded on server side
        - 10mb max
        - Processing power during expansion
    - Templates can be nested
        - Isolate function into meaningful files
        - Create reusable assets
        - Separate template for firewall rules
    - Templates have properties
    - Templates can use environment variables
    - Support startup scripts/ metadata capacity
    - Eployments can be updaed using GCP - API
        - Add / Remove => USE REST
- How it Deployment manager works:
    - Completely dependent on API
    - API for resources must be enabled in API manager
    - Every property is required by API must be in template
    - Only supports specific resource types

# Cloud Launcher
- Marketplace for Past Solutions
- 3rd party solutions
- Separate fees for licensing/ usage costs

## Managed services
- Integerate solution offered as a service
    - Platform as a service
        - Dataproc
            - Spark, Hadoop, Pig
            - Rapid scaling of clusters
            - Clusters can preempt VM (cheaper)
            - Job output
                - Easy to locate without log files
        - Dataflow
            - Data processing service
            - Batch/ stream processing
            - online stream ETL processes
            - SEparate data processsing requirements from data source
            - Create pipeliens, pcollection, trasnfroms, IO sources, sinks
                - Pipeline: Series of computations that accept data and transform it out
                    - Output is a sink
                - Pcollection
                    - The Dataflow SDKs use a specialized class called PCollection to represent data in a pipeline. A PCollection represents a multi-element data set.
                    - You can think of a PCollection as "pipeline" data. Dataflow's transforms use PCollections as inputs and outputs
                    - Want to work with data in your pipeline, it must be in the form of a PCollection. Each PCollection is owned by a specific Pipeline object, and only that Pipeline object can use it.
        - Big Query
            - Interactive analysis

# Cloud Data Storage Options
## Cloud Storage
- Object file system storage. (Binary immutable Objects)
    - Buckets
        - Bytes of data with unique key
        - Directory (Object point to another object)
        - Store Blobs of information
        - Not easy to index all of the files
    - Storage Classes (Moving classes requires gsutil command)
        - Regional
            - Store data at a lower cost; tradeoff is that data is being stored in specific regional location, instead of redundancy
        - Multi-regional
            - Redundancy
            - Separate
        - Cloud IAM
            - Goes to ACL
                - Goes to Signed URL + Valet Key via ticket
                - Signed document policy
            - Access to Project
            - Access to bucket
            - Access to Object
        - ACL
            - Timed access is possible
                - Who can access it
                - What level of access
                - One / more entries
                    - Scope/ Permission
        - Cloud storage features
            - Customer supplied encryption keys
                - Persistent disks to VMs
                - Allows you to supply your own encryption keys
            - Object lifecycle management
                - Auto delete/ archive object
                - OBject versiinoning
                    - Charged for additional versions as multiple files
                        - Archive when delete or overwite
                - Directory syncronization
                - Data import, strong consistency
                - Object change notifier - Watch request
                    - PUB/ SUB (recommended) - cost effective/ faster
                - Can setup use cases for setting up to live , archive older, delete or downgrade storge classes (coldline storage)
    - How to transfer data?
        - Storage transfer service
            - High performance on online data
            - Destination: Cloud Storage Bucket/ Amazon S3 bucket/ HTTP/ HTTPS
        - Google transfer appliance
            - High capacity storage server leased from Google
                - Connect to network, load data, and ship
        - Offline media transfer
            - 3rd party service, where physical media such as storage arrays, harddrive disks, tapes, usb flash drives sent to provider who then uploads the data
    - Strong consistency in data
        - Write/ read - immediately availble, no stale data
        - Deletes - immediately
        - Object listing
- Encrypts data before writing to disk
- fully managed, no capacity limit, provision capacity
- Example: website, data, cluster, large files for download
- Buckets for objects.
- Can use versioning on these objects
    - new > old
    - lifecycle management, "keep most recent", "delete versions > 365 days"
- Transfer Data - HTTPS
- Other GCP services
- Geographic location, default class for buckets
- Cloud IAM
  - Project into Buckets
  - ACL(s) finer control
  - Scope (users), permissions
- Storage - all accessible by API
  - Region
    - Less redundant
    - Cheaper
    - Specific region
    Uses:
      - Data for compiling
      - VMS
      - Kubernetes Engine
  - Multiregional
    -  High performance
    - Broad continuation, redundant
    - Frequently used websites
    - Interaction control
    - Mobile app
  Backups and archival storage
  - Nearline
    - Infrenquently stored durable data
    - Read/ write once a month
  - Coldline
    - Low cost
    - Data archival
    - Online backup
    - Disaster recovery
    - Once a year; min allowed time: 90 days

## Cloud Data Store
- Persistent hashmap
- noSQL, structured data
    - ACID transactions, SQL-like queries, indexes
-    Automatically handles sharding/ replication
- Transactions using indexed properties
    - Multirow queries
- can be integration point
    - With Cloud Datastore's RESTful interface
    - Data can easily be accessed by any deployment target.
    - Build solutions that span across App Engine and Compute Engine
- Datastore is more geared towards Python/Java/Go web app developers (originally App Engine)
- The billing model is very different:
     - Datastore charges for read/write operations, storage and bandwidth
     - Bigtable charges for 'nodes', storage and bandwidth
- Features
    1.) Filter objects on property
    2.) Update granularity : attribute
    3.) Write is a put object
    4.) Stores structured data from App engine apps paired with mem cache - "Cached miss"
        - Repeatedly read
    5.) Sharding Replication
    6.) SQL like queries transactional database indexes
    7.) Category of Object = kind
        - Object = entity
        - Individual data = property
        - Unique id = id
- Great for:
    - Schema will change and needs to be adaptable for DB
    - Scale down to zero
    - Low maintaince and overhead


## Big Table
- noSQL, data analysis
    - Single key look-ups, indexed by a single Row key.
    - Read - scan rows
    - Write - Put rows
        - Use Row Key - ideally, singled keyed data with low latency
        - Analytical / operation
            - Financial analysis
            - Search/Map/ gmail
        - Interact
            - Multiple client libraries
            - Batch map/ reduce
            - Stream processing/analytics
            - Machine learning applications
- More like IAAS, single region
- HBase (SQL like queries), Hadoop portability
    - Incredible scalability
        - Scales in direct proportion to the number of machines in your cluster
        - Self managed HBase installation has a design bottleneck that limits the performances after a certains QPS is reached
        - Cloud BigTable does not have this bottleneck, and can handle more queries
    - Simple Administration
        - Handles upgrades and restarts transparently, and auto maintains high data durability
        - Replicates your data by simply adding a cluster to your instances
        - Replication starts automatically
    - Cluster resizing without downtime
        - Can increase the size of a Cloud Big Table cluster for a few hours to handle a large load
        - Reduce the cluster's size without any downtime
- Atomicity on one row, no transactions
- Structure data / flexible schemas,
    - Sparely populated rows
    - Billions of rows, don't need to reconfigure
    - Persistent hash tables
    - Blocs of continous rows are called tablets
        - Tablets are stored on Colossus, Google's file system, in SSTable format
            - Provides a persistent orderedm immutable map of keys to values
            - Both keys and values are arbitrary bytes of strings
            - All writes are stored in Colosuss's shared log as soon as they are acknowledged
    - Data is never stored in Big Table nodes themselves
        - The node has pointers to a set of tablets that are stored on Colossus
            - Rebalancing tablets from one not to another is very fast, because actual data is not copied, Big Table simply updates the points for each node
            - Recover from the failure of a Cloud Big Table is very fast, only metadata  needs to be migrated to the replacement node
            - When node fails, no data is lost
- Very low latency
- Handles upgrades easily, highly scalable
- Encryption
- Example:
    - Uses: iOT, user analytics, financial documents
        - Time-Series data
            - CPU and memory usage over time for multiple servers
            - Marketing data
                - Purchase history, customer preferences
            - Financial Data
                - Transaction histories, stock prices, currency exchange rates
            - IOT
                - Usage Reports from energy meters and home appliances
            - Graph data
                - How things relate to one another.
    - From application database stream to spark storage. batch processes, summarize down
    - Ideal for applications that need very high throughoutput and scalability for non-structured key/value data
        - excels as a storage engine for batch MapReduce operations
        - Stream processing/ analytics
        - Machine learning applications

## Cloud SQL
- DB Schema 0 consistent
- TB of info
- Two ways
    - Directly insert SQL Queries or install SQL server on VM inside of Compute Engine
    - Benefits of Cloud SQL over GCP
        - Fully managed =  patches and updates auto applied
        - Administer users with Cloud Shell
            - SQL Workbench tool
            - mySQL Drivers
    - 2nd generation of CloudSQL
        - Higher throughput and storage capacity
        - InnoDB = Storage
    - 1st generation
        - Only works with mySQL 5.5
        - IPV6 Connectivity
- Standard vs Cloud SQL functionality
    - User defined function != supported
    - Cloud SQL
        - Replicate data between multiple zones
        - Audit, failure
        - Backup.
    - Connecting - via IP address (not for Production)
        - Temporary whitelist IP
            - administer tasks
                - Require mySQL command line
        - Configure SSL certificates for Cloud SQL instance
            - Connect to mySQL client via SSL
        - Cloud SQL Proxy
            - Run local client
        - Native mySQL privileges
        - Secure access noSSL, communicate with proxy tunnel
- Transaction is all or nothing; Bank example
- mySQL, postGreSQL (beta)
- Managed service or server in VM compute engine
    - Read duplicates
- Replica service during outage
- On demand/ schedule batch
- Google security
- Scale vertically with machine type
- SQL workbench with other apps

## Cloud Spanner
- Virtually unlimited horizontal scalability and 99,999% service-level agreement (SLA)
- Relational database service with transactional consistency
    - PetaBytes of data
    - Schemas, SQL, auto synchronous replication, high availability
    - Outgrown RDS (AWS)/ sharding databases for throughput high performance
    - Thousands of Nodes
- Acid SQL like transactions
- Auto sync replicatioon
- Cross-table transactional support: transactions can span across multiple tables—doesn’t have to be limited to a single table (unlike Apache HBase or Apache Kudu).
- Need global data
- Strenghts
    - Strongly consistent secondary indexes
    - SqL statements with altered statemends
    - Managed instances
    - Database consolidation
    - IAM policies
    - Replicication using G-Fiber
    - Atomic clocks, timestamp bound
    - Database split
- Examples: Finance and investment industry
    - KInventory Ap

# Introduction to Containers
Alternate to hardware
# VMs vs Containers
Virtual Machines
- Virtual Machines are isolated from one another in part by each VM having its own instance of OS
- OS -> Slow to boot
- Modern OS - built in capcity to isolate environment
    - Processes: Running, name space, limit by supervisor

## Containers
- Package up your application into minimally sized components (unit) separated from OS/ infrastructure
    - App management (Sandbox)
        - Containers silo applications from each other unless you explicitly connect them. That means you don't have to worry about conflicting dependencies or resource contention — you set explicit resource limits for each service. Importantly, it's an additional layer of security since your applications aren't running directly on the host operating system.

    - Maintain vendor independence
    - Write once run everywhere
    - Workload relocation
    - Decouple application from dependencies
- Abstract unnecessary and unimportant details in environment
- Loose coupling
- Containers start up quicker, use less resources than Virtual Machines
- Min. required software, have its own instance of OS
- Calling into kernal only when it is necessary
- Determines image format
- Kubernetes uses docker container runtime

## Kubernetes (Greek for Navigate/ Helsman)
- Multi cloud solution
    - Framework for container management / automation
    - Developing rapidly
        - Run anywhere, autoscaling
    - Stack driver integration, VPN, IAM
    - Automate deployment of containers cluster
        - Phtsical hardware (VM) one master coodinator (API access)
            - Node (Docker) - Minimum of 3 are recommended
        - Network Proxy
            - Secure communication
        - Kubelet Agent
            - Managing and scheduling
    - Kubernetes Master
        - API management
            - Handles scheduling, cloud endpoints for cluseter
        - You do not see management when using Kubernetes Engine
    - Organized as Pod
        - Multiple containers, running one at a time
        - Expose apps thorugh public IPs
        - Central storage
            - Load balancing based on labels (key: value)
            - Pods connected to service by labels
- Deployment
    - Define how scaling works based on parameters
        - Individual nodes [Deployment -> [Pod -> Container][Pod -> Container]]
    - Cluster Container
        - [Master | [Node/ VM][Node/ VM][Node/ VM]]
    - Built in resilience
    - Minimum of 2 pods at each time
    - Rolling update
    - Node pods
        - Instance groups in kubernetes cluster
        - Like managed instances
        - Different zones = different VMS
        - Kubernetes engine = pool aware
        - Node pools/ multizone container cluser
    - Cluster federation
        - Manage/ deploy in multi-cloud provider/ region
        - Autoscaler
- Highly available, hybrid cloud
- Simplifies process of deployment
- Container cluster orchestration system
- Pod: Group of containers networked together with guaranteed network access
    - Help devs build modularity
- Example: Web shared Application
    - Has own dev tools (one container), your tools in another container
    - Laptop/ GCP
    - Modular/ Replacable
    - Rolling update
        - Update without downtime
    - Kubernetes cluster = group of machines scheduled for container(nodes)
        - load balancer/ scaling option
    - Cloud agnostic
        - Storage persistence
        - Network
        - Load Balancer

- Build and manage Kubernetes cluster
    - Manage, build, delete clusters
    - Resources from compute engine VPC(s)
- Declarative syntax
    - Give description of cluster environment you want and Kubernetes handles the changes, and implements new settings
    - NO - No need to issue the underlying compute engine or API calls
    - YES - Relieves developers from the operational details of running a cluster
- Built in logging
- Autonode upgrades
- To use kubernetes, you need to be able to build kubernetes containers, store images of container

## Google Cloud Container Registry
- images may be shared
- Public/ Private container storage
- Billed for storage/ egress, not per image

| Kubernetes
1.)  Multicloud on Premises
2.)  Deep control over orchestration

| Containers
1.) Use containers when you want absolute control over VM instance but you want the docker image environment

| App Engine Standard
1.) Very fast scale up
2.) No docker container

| App Engine Flexible
1.) Code first, developer focused
2.) Simpler than Kubernetes
3..) Logs, traffic abstracted

# Google Cloud Container Builder/ Google Cloud Container Registry
## App Engine - Platform as a Service - Scalable Application
- Scalable, deployment, maintainable
- Highly Variable
- Standard and Flexible Environment

## Standard Environment
- Free daily usage
- Milliseconds to be ready
- Low usage apps can be free
- Test locally with SDK
- Binary, runtime for JAVA, Python, Go,
    - No 3rd party apps
    - Can't write to Local
    - All requests will timeout after 60 seconds
- Sandbox
    - Scale/ Manage/ Fine Grained control
1.) Develop/ Test the web locally
2.) Use a SDK to deploy to App Engine
3.) App engine autoscales/ reliably serves your webpage
    - Can access a variety of services using dedicated APIs

## Flexible Environment
- Specify container (Docker) on VMs
    - VM / App engine maintains this for you with Health Checks
    - Which geography/location of these VMs
    - Standard runtime can access containerized apps
- No autoshutdown
- Can use 3rd party apps
- Network access
- SSH abilities

# App Engine vs Kubernetes

## App Engine
1.) People who want to take max control of their applications, deployment and scaling
2.) Primary use: Web/ Mobile apps
    - Containers are a means to an end

## Kubernetes
1.) Any language support
2.) Container based workhorse


# APIs - Application Programming Interfaces
- Structured software for interface for consumers
- Abstracted / documented unnecessary information
- Versions of APIs

# Supporting APIs in two ways
1.) Cloud Endpoints
- Expose API for frontend to make use of cloud based app services
Example: Developing software. One of GCP's backend / backend APIs
    - Only consumed by developers you trust
    - Monitor log its used
Answer: Cloud Endpoints - cloud console
    - Your choice of language/ client technologies

2.) Apigee Edge (3rd party)
    - Platform for making APIs available to your customers
    - Partners ind eveloping /managing proxies
    - Bussiness focus: Rate limiter, quotas analytics

# Development in the cloud
Git - own git instance
- hosted, 3rd party

# Cloud Source Repository
- Private git repository
- Source Viewer

# Event Driven Parts
- What provisioning resources to that new service?
- Cloud Functions Beta
    - Automatically run/ runtime binaries
- Create single purpose function that respond to events without server/ runtime
- You chose what events to watch, and triggers what cloud functionality
- One API, single piece of Code, limited input
- Lightweight (Event Actions)
    - Compute actions for developers to create single purpose, stand alone functions tha trespond to cloud events without the need to amanger a server / runtime environment
    - Triggered by Pub/Sub, HTTP, Cloud storage

# Problem: Keeping track of environments manually => Lots of work
- Answer: Deployment Manager - Templates Declaration (infrastracture manager)
    - Creation and management of GCP resources for you
    - Template file (YAML/ Python) -> Components
    - Does all template direction
        - Edit YAML
    - Version control
        - Use YAML file

# Monitoring - Stack driver
    - Infrastructure
    - Debug,
    - Logger,
    - VM, container,
    - Metrics
    - Trace
    - Error
- Respond with information vs Panic
- Uptime checks, load balances, alerts with uptime/ errors
- Dashboards = customizable
- Logging - Metrics, alerts, dashboard
    - Cloud PubSub, Big Query
- Error reporting , new errors detected per URL statistics
- Debugger: production code to source with application state.

# Google Cloud Big Data Solutions
- Integrated Serverless Platform
    - Fully managed custom solution
    - Apache Hadoop
        - MapReduce Programming model
            - 1 Function Map runs in parallel with massive dataset to produce intermediate results
            - 1 Function Reduce builds final result set with intermediate set
    - Dataproc
        - Manages Develop and deploy Hadoop/ spark/ Hive/ Pig on GCP
        - Creates clusters in 90 seconds or less
        - Scales clusters allowing you to integrate with Cloud Storage and stackdriver Logging
        - Coordinate and manage the lifecyle of clusters, which run until shutdown
        - You can resize your clusers even during job processing
        - Request Hadoop cluster transferred to compute engine
        - Monitor using Stack Driver
        - Only pay for hardware resoruces used during life of clusters you create
        - Rate is usually based on the hour, but Dataproc is billed by the second
        - Save money by using...
            - Preemptive compute engine instances, instead of using batch processing
            - Restarted Cleanly (80% cheaper)
        - Cluster costs: - SparkSQL for datamining
        - MlLibrary to find patterns

## Dataflow vs Cloud DataProc
    - Dataproc = Known size and you have to manage the cluster size yourself
    - Fully-managed service for transforming and enriching data in stream (real time) and batch (historical) modes with equal reliability and expressiveness
    - Realtime data, unpredictable rate/ size
    - Managed service, serverless
        - Extract
        - Transform
        - Load batched computational data
        - Continuous computation
        - Uses data flow into a pipeline
        - No need to spin up cluster/ instance; fully automated
        - Frees you up from resource management and performance optimization
        - ie.) Big Query (Service) -> (Transfer Pipeline/ Dataflow) -> Output A (Sink)
        - Resources: on-demand
        - Dynamic rebounding
        - Large amount of data to one particular cluster
        - Examples:
            - General ETL tool; data analysis personalization
            - Fraud detection of financial services
            - Clickstream, point of sales, and segmentation analysis in retail
            - IoT analytics in manufacturing, health care, and logistics
        - Integration with...
            - streaming event ingestion (Pub/Sub)
            - Data warehousing (BigQuery)
            - Machine learning (Cloud machine learning)

## Big Query
- Explore large sea of data
- Storage and computation are searpate
- adHoc SQL queries (syntax)
- Low cost, region specific
- No infrastracture for management
- Pay as you go
- Stream 100,000 rows per second
- Re-write in Hadoop and Spark
- Free monthly queries, 99.99% SLA
- Access control
    - People who use the tool, pay for their own queries
    - Long term storage discount for data > 90 days
- Real time analysis on petabytes of info

#Application Infrastructure Services
## Pub/ Sub
- Simple foundation for stream analysis
    - 7 days storage
- Independent apps to send/ receive message
- Receive != synchronous
- At least once delivery. Small chance that it is delivered twice
    - Publisher, subscriber = Pull/ Push data
    - PConsumed => Send receipt of "Read" to subscription
        - Removed Msg from Queue
- Uses:
    - Balance workloads in network clusters
    - Implement async workflow
    - Distributed Event notification
    - Refresh distribute caches
    - Logging to multiple systems
    - Data stream
    - Reliability improvement
- 1,000,000 messages per second; data arrives at high unpredictable rates (IoT as an example)
- Great integration with GCP platform/ decoupling of services
    - Ex.) Real time personalization in gaming
        - Fast reporting, targeting, optimization in advertising and media
        - Processing device data for healthcare, manufacturing, oil/ gas, and logistics
        - Syndicating market- related data streams for financial services
    - Syndicate data acorss projets and applications running on other clouds, or between cloud/ on-premise apps
    - End to end encryption for your pipeline
    - ie.) Applications/ Devices/ Databases -> Ingestion (Pub/Sub) -> Process (Dataflow) -> Analysis (BigQuery - warehousing, Machine Learning - Predicative analytics, BigTable - Caching/ Servicing)
    - Project Jupyter - web based notebooks - Datalab -> Compute engine VM type/ GCP region
        - Takes management of this technique
    - Python interaction environment, explore your data
    - Harnessing your data is no longer a problem
    - Visualize with Matlab/ Google Data Studio

# Machine Learning Platform
- Has pre-trained models, and custom tailored models
    - Machine learning models for large scale training on managed clusters
- Range of services from NLP to Tensorflow
- Tensorflow (Neural Networks)
    - GCP = ideal place for it
    - Tensor processing units
    - TPU - 180 teraflops of data
        - Google Cloud TPUs are a family of hardware accelerators that Google designed and optimized specifically to speed
        up and scale up ML workloads for training and inference programmed with TensorFlow.
        - TPUs are designed to deliver the best performance per dollar for targeted TensorFlow workloads, and to enable ML engineers and researchers to iterate more quickly.
    - No upfront costs
- Range of APIs for purposes
    - Structured
        -ML Classification using regression models for recommendations and abnormalities
    - Unstructured data
        - Image analytics (styles, flag control)

## Cloud vision (insight)
- Enables you to understand the content of an image by encapsulating powerful machine learning models in an easy to use REST API.
- Classifies images into thousands of categories (e.g. "sailboat", "Eiffel Tower"),
- Detects individual objects and faces within images, and finds and reads printed words contained within images.

## Google Cloud Video Intelligence API
- Makes videos searchable and discoverable by extracting metadata,
- Identifying key nouns, and annotating the content of the video.
- Can search every moment of every video file in your catalog and find each occurrence of key nouns as well as its significance.
- Separate signal from noise, by retrieving relevant information by video, shot, or frame.

## Google Cloud Speech-to-Text
- Enables developers to convert audio to text by applying powerful neural network models in an easy to use API.
- Recognizes 120 languages and variants, to support your global user base.
- Can enable voice command-and-control, transcribe audio from call centers, and more.
- Can process real-time streaming or pre-recorded audio, using Google’s machine learning technology.

## Google Natural Language API
- Reveals the structure and meaning of text by offering powerful machine learning models.
- Extract information about people, places, events and much more, mentioned in text documents, news articles or blog posts.
- Understand sentiment about your product on social media or parse intent from customer conversations happening in a call center or a messaging app.

## Google Cloud Translation API
- Provides a simple programmatic interface for translating an arbitrary string into any supported language.
- Highly responsive, so websites and applications can integrate with Translation API for fast, dynamic translation of source text from the source language to a target language (e.g. French to English).

# GCP Foundations
- Jenkins - open source continuous integration environment
    - Define jobs in Jenkins
        - Perform scheduled jobs/ build of software backing up data
        - Build and maintained by Bitmain
        - Template system = deployment manager
    - Deployment manager -> GCP service, uses templates written in a combination of YAML, Python and Jinja2
        - VM machine created
            -Allocate of GCP resources, perform setup tests
    - SSH over Jenkins

## Virtual Network
- Google uses software defined networks (SDN)
- Global fiber network
- Resources are services, and are not hardware

## Google VPC - Virtual Private Cloud Objects
- Virtual Private Cloud (VPC) gives you the flexibility to scale and control how workloads connect regionally and globally.
- When you connect your on-premises or remote resources to GCP, you’ll have global access to your VPCs without needing to replicate connectivity or administrative policies in each region.
- Fine grained networking policies
- Projects encompass every service
- Routes/ firewalls
- Allows you to connect an ecosystem of services (VPC networks)
    - IP, protocol forwarding, loading balancing, cloud DNS , VPN tunnels
- Advantages
    - Network latency; public ip suffer higher latent
    - Network security
    - Network Cost (Egress Cost)
    - Internal load balancer
        - Clients in directly peered networks
    - Firewalls
        - Control subnet connections (VM)
- Networks
    - Default
    - Auto
    - Custom
- VPC -> IP Address (external/ internal)
- VM
    - Setup or Configure

# Attributes of a VPC
- Global
    - A single Google Cloud VPC can span multiple regions without communicating across the public Internet. Single connection points between VPC and on-premises resources provides global VPC access, reducing cost and complexity.
- Sharable
    - With a single VPC for an entire organization, teams can be isolated within projects, with separate billing and quotas, yet still maintain a shared private IP space and access to commonly used services such as VPN or Cloud Interconnect.
- Expandable
    - Google Cloud VPCs let you increase the IP space of any subnets without any workload shutdown or downtime. This gives you flexibility and growth options to meet your needs.
- Private
    - Get private access to Google services, such as storage, big data, analytics, or machine learning, without having to give your service a public IP address. Configure your application’s front end to receive Internet requests and shield your back-end services from public endpoints, all while being able to access Google Cloud services.
    - Private Google Access
        - Enables VM on subnetwork to reach Google APIs/ services
        - No internet necessary
- Transparent
    - Use VPC flow logs for near real-time (5-second interval) logging to monitor your deployment for both performance analysis and network forensics. This allows you to keep your deployment running securely and at peak efficiency.

## IP Address
- Each virtual machines has two kinds of IP addresses
    - Internal (Assigned by DHCP)
        - Renewed every 24 hours
        - VM name and IP address registered with networked scoped DNS
        - Each has a hostname resolved to an internal IP address
            - Hostname is the same as an instance name
            - Fully Qualified Domain Name - FQDN = [hostname].c.[project-id].internal
        - Name Resolution
            - Provided as part of Computer Engine
            - Configured for use via DHCP
            - Provides answer for internal/ external addresses
        - DNS = particular instance
            - metadata for local /queries for public DNS resolution
            - Stores map from external to internal
    - External (Assigned by pool)
        - Reserved (static)
        - VM doesn't know IP, mapped to internal IP
        - Instance with external IP address can allow connection from hosts outside of project
            - User directly using external IP addresses
            - Admin publicizes DNS records points to instance
            - Public DNS records are not published automatically
        - DNS records can be published using existing DNS
        - DNS zones can be hosed using Cloud DNS, instead of using VM bin server
            - Create, update, remove records manually with API
            - Zone, configure domain DNS to use
    - Alias IP addresses
        - range of internal ip addresses that can act as aliases to VM primarily for network interface
        - Useful if you have multiple VMs, you want to assign each service as a different IP Address
        - Multiple IPs on VM, representing different containers/ Applications without defining separate network interfaces

## Routes and Rules
- Every network has routes, allowing instances into the network to send trafffic directly to each other, even across subnets
    - Every network has default routes that direct packets to destination outside of networks
    - Special routes which can override these routes
    - Firewalls must allow packets to route
        - Default - internetwork traffic is okay
        - Manually created = blocked
- Routes
    - Match packets by destination IP Address
    - Created when networks are created
    - Created when subnets are created
    - Allows Vms on same subnetwork communication
- Virtual network router consults writing table of instance before hopping to next VM at top layer before being forwarded
- Firewall protects both ingress/ egress connections
    -Every VPC has a firewall,
    - Connections are allowed and blocked on instance level
- Firewall rules
    - Direction, source/destination, protocol/port/action, priority, rule assignment
    - Express desired direction of rule (inbound rules) for ingress connections
        - Protocol, port of connection
        - Any rule can be restricted to apply to specific protocols/ ports
    - Source tags can be used in VM to VM connections.
    - Route -> Instance
        - If network / instance stack matter then you can apply rules to all instances within that stack
        - Uses collection to create read only routing tables for each instance
        - Scalable
    - Rule assignment is for specific instances
        - Egress firewall can be an IP range
- Billing
    - Free Tier
        - Ingress to GCP
        - Egress to same zone
        - Egress to different GCP service in same region
        - Other Google products in same region
    - $0.01 / Gb
        - Zones, same region
        - Regions within US
    - Varied
        - Regions, not including traffic between US regions can vary

# Common Network Design
- Rich set of alternatives for managing groups of resources with varying resources with varying availability/ access control requirements
- Explicitly manage network, routes, firewalls -> Granular control
- Example 1 - Availability
    - One Project
        - One Network
            -One Region
                - One Subnetwork
                    - Multiple zones
    - Pros:
        - Increased Availability
        - Simplified security
- Example 2 - Globalization
    - One Project
        - One Network
            - Multiple Regions
                - Two Subnetworks
    - Pros:
        - Load Balancer
        - High scalability
        - Subnetwork connections span networks
- Bastion Host Isolation
    - External point of entry - enable/disable SSH
        - pecial purpose computer on a network specifically designed and configured to withstand attacks.
        - The computer generally hosts a single application, for example a proxy server, and all other services are removed or limited to reduce the threat to the computer.
        - It is hardened in this manner primarily due to its location and purpose, which is either on the outside of a firewall or in a demilitarized zone (DMZ) and usually involves access from untrusted networks or computers.
    - Maintenance host to connect to internal instances only available to those within internal avail. network
    - Instances used as jump host
       - External connections via SSH, used to connect to internal instances
    - Be sure to harden bastion host
        - Limit Classless Inter-Domain Routing range of source IPs connecting to Bastion
        - Firewalls rules allow SSH traffic to private instances only from Bastion
    - By using a bastion host, you can connect to an instance that does not have an external IP address. This approach allows you to connect to a development environment or manage the database instance for your external application, for example, without configuring additional firewall rules.

      A complete hardening of a bastion host is outside the scope of this article, but some initial steps taken can include:

      Limit the CIDR range of source IPs that can communicate with the bastion.
      Configure firewall rules to allow SSH traffic to private instances from only the bastion host.
      By default, SSH on instances is configured to use private keys for authentication. When using a bastion host, you log into the bastion host first, and then into your target private instance. Because of this two-step login, which is why bastion hosts are sometimes called "jump servers," you should use ssh-agent forwarding instead of storing the target machine's private key on the bastion host as a way of reaching the target machine. You need to do this even if using the same key-pair for both bastion and target instances, as the bastion has direct access to only the public half of the key-pair.

# Virtual Machines / Compute Engine
- Most common infrastructure component
    - Micro- cpu share with other VMs != not possible real hardware
    - Lower capacity at lower costs
    - Some VM have burst capacity
        - Above rated capacity for brief time
    - CPU and memory disk as an option
- Spectrum of options
    - Run in whatever language
    - Autoscaling
    - Enterprise level apps
    - Portability
    - IAAS -> Phsyical servers within Google environemnt
        - How much memory, disk, cores (CPUs)
        - Several features
            - Right sizing
            - Metadata,
            - Availability
            - Startup scripts
- Compute Options
    - High memory or High CPU
    - Shared Memory Core Types
    - Custom

    - Remember Scale at 2GB/ sec for each CPU core ===  16 GB / sec throughoutbit (8 core)

    - vCPUs = 1 hyperthreaded core; 2 vCPUs === 1 physical core
- Disk Options
    - Standard, SSD
    - Local SSD
        - Higher throughput/ lower latency
            - Doesn't stop billing until deleted or stopped
        - Swap disk
    - 8 * 375 local SSD => 3 Terabytes per instance
    - 8 * 375  Regular => 64 Terabytes per instance

- Networking
    -Regional/ networking load balancing HTTPS
   - No -Pre-warming necessary

- Pricing / Billing
    - Per second billing
    - Sustained Use discounts
        - 25% off for sustained use for a month
        - Auto applied
        -Inferred resource - same machine/ same region
        -Combined Resources
        -Committed Use contracts
    - Min Time: 1 minute
    - Pre-emptive instances
        - Live at any point for 24 hours
        - Up to 80% discounts
        - 30 second notification via API that the instance will be used elsewhere/ terminated
    - Recommendations given for utilization

## VM Access/ Priviledge
- Lifecycle
    - Provisioning
        - CPU / Memory
        - Root/ Persistent
        - Add Disks
    - Staging
        - IP Addresses (Internal/ External)
        - System image
        - Boot
    - Running
        - Startup script
        - Access SSH
        - Modify Used
            - Export system
            - Snapshot
            - Move VM to different Zone
    - Stopping
        - Shutdown scripts
    - Reset
        - Shutdown/ reset take about 90 seconds
    ** Premptive VMs
        - No live migration
        - No auto restart
        - Great for batch processing
- When a VM is terminated, it is restarted by default

## VM Compute Options
- Web Console
    - Command line/ REST
- Shared Resources Apps
    - Great for running small non resouce intensive apps
- Standard
    - 3.75 GPU
    - 64 vCPU
    - 240 gB of Ram

## Images
- Gcloud included in image
- Public vs Private
- Linux/ Window
- Per sec charge except SQL (per min.)
- Import images
- Share custom images

## Disk
- Bootable, durable, can survive if instance is deleted
- Not physcally tied to instance,
- Can't migrate between regions
- Snapshots
- Dynamically resize
- You can attach a non-boot persistent disk to more than one virtual machine instance in read-only mode
    - Allows you to share static data between multiple instances.
    - Sharing static data between multiple instances from one persistent disk is cheaper than replicating your data to unique disks for individual instances.
- Locally attached to VM
    - Data can survive reset
    - Data does not survive when terminated or stopped
    - Compute Engine offers always-encrypted local solid-state drive (SSD) block storage for virtual machine instances.
    - Each local SSD is 375 GB in size, but you can attach up to eight local SSD devices for 3 TB of total local SSD storage space per instance.
        - Local SSDs are suitable only for temporary storage such as caches, processing space, or low value data.
    - Optionally, you can format and mount multiple local SSD devices into a single logical volume.
    - Unlike persistent disks, local SSDs are physically attached to the server that hosts your virtual machine instance.
    - This tight coupling offers superior performance, very high input/output operations per second (IOPS), and very low latency compared to persistent disks.
- In-memory RAM Disks
    - High-performance, enterprise-class memory that you can use to run your applications.
    - Allocate some of this memory to create a RAM disk with exceptionally low latency and high throughput.
    - Work well when your application expects a file system structure and cannot simply store its data in system memory.
    - Alone do not provide any storage redundancy or flexibility, so it is best to use RAM disks in combination with other instance storage options.
    - Share instance memory with your applications. If your instances do not have enough memory to contain RAM disks and your applications, create instances with high-memory machine types or upgrade your existing instances to add more memory.
- Cloud Persistent Disks
    - Single File system
    - Resize disks and file system
    - Built in redundancy -> built in snapshot
    - Autoencryption

## Common actions
1.) Move Instance
    - Automate move within region - gcloud compute instances move
    - Update refs to Vm, not automatic
2.) Manual Process (Between regions)
    - Snapshot all persistent disks on source VM
    - Create new persistent disk in destination zone restored from snapshots
    - Create new VM in destination zone, attach new persistent disks
    - Assign static IP to new VM
    - Update refs to VM
    - Delete snapshots, original disks, original VM (Cleanup)

## Snapshots in CLoud Storage
- Transferring data to different disks, region, zone
- Disk snapshot
    - only to persistent disk not local
    - Create instances/ configure instance templates
    - Periodic backups
    - Incremental, full image backup
- Snapshots can be restored to a persistent disk allowing for a move to a new zone
    - Prepare persistent disk to freeze/ unmount (better option)
    - Stop any apps from read/ write
- Resize persistent disk
    - Improve input/output performance only grows

## IAM Hierarchy of Security Model
- High level organization -> members -> Services
- Email like address - high roles
- Who - What (Priviledges, actions) - which resources
- Org -> Folder -> Project -> (Resource, Resource)
- Object -> Folders -> Projects -> Members -> Roles -> Resources -> Products -> G-Suite Admin
- Org Node
    - Admin/creator
    - Useful for audit
    - Created by Google Sales
        - Org-Owners established at creation
    - Org Owners
        - Assign organization admin from G-Suite admin onsole
        - Always have more than one org owner
- Folder - Sub organization
    - Model different team/ org/ legal entities
    - Can contain sub-folders etc
    - Can contain projects
- Roles
    - Organization
        - Admin
        - Viewer
    - Folder
        - Admin
        - Viewer
        - Creator
    - Project
        - Creator
        - Delete
-G Suite Super Admin
    - Administers a Google hosted domain
    - Created users/ groupts
    - Assigns a GCP owner for GSuite Admin console
    - Creates control over membership into groups
        - Google hosted domains

## Best practices
1.) Principle of LEast Privilege
2.) Different Groups (SeCOPs)
    - Admin
    - Log Viewer (Audit)
        - Audit Policy Changes:
            - If a group membership = secure, then assign roles to groups
            - Let GSuite admins handle membership
            - It is a high security risk to assign roles directly
3.) Policies

### Multiregional
- Website content, work load,s mobile/gaming apps
- vs Kubernetes,/ compute engine clusters

### Nearline Storage
- 30 day minimum
- Accessible no more than one time / month

### Coldline
- 90 day minimum
- Good to access once a year

Definition: **Storable** - Data is durable and safe. Maybe not readibly available.

Cloud Storage
- Buckets
	- Naming required
	- Cannot be nested
- Objects
	- Inherit storage
	- No minimum size
	- Unlimited storage
- Access
	- GSutil command
	- Restful - JSON api
		- XML API

### Work flow
-

### Members - Who?
- Users
    - Google Accounts,
    - G-Suite Domains,
    - Groups
        - Easy way to apply permissions
        - Access to users
    -Cloud identity domains
    - GCP does not manage or create users/ groups
        - GSuite admin does this for you
- Service Account
    - Identification for carrying out server to server interaction in project without supplying your credentials
    - Used to authenticate from one service to another
        - Programs using Compute Engine instances can automatically acquire access tokens with credentials
        - Token used to access any Service API in your project/ other service that granted access to that account service
        - Convenient when not accessing user data
    - ID by email address
    - Type
        - User created
        - Google API account service
            - Runs internal Google processes with write access
        - Default compute engine service account
            - Auto enabled on all instances using gCloud / GCP console
- Scopes Identifies the User can do WHAT?
    - Legacy Method
    - Read only
    - Write
    - ID -> Cloud IAM -> Role -> Resources
    - Ability to slice up VM into separate microservices
    - Service Account (with GCP managed Keys) vs. User managed
        - User managed keys are downloadable, key rotation service available
    - Leverage Resource Hierarchy
        - USe projects to group resources that share trusted resources
        - Check policy granted on each resource
        - Understand inheritance
        - Least privilege access
        - Audit membership
        - Group policies log
- Best practices
    - Grant Roles to Google Groups
    - Use multiple groups
    - Give it a display name, clearly defining its purpose
    - Establish a naming convention
    - Establish a key rotation, convention/ method
    - Service Account users can be dangerous, be wary
    - Audit with serviceAccount.key_list()
    - Use Cloud IAP
        - Identity - aware Proxy
            - Building block toward BeyondCorp, an enterprise security model that enables every employee to work from untrusted networks without the use of a VPN.
        - Central Auth layer
        - Access control
        - ie.) User -> IAP (checks identity) -> ERP / CRM (Guard gate)

# Data Storage Services
- Variety
    - How similarily structured / variable data is
- Velocity
    - How fast data comes
- Volatility
    - How long data retains values, accessible

## Decision Tree
- Data Structure?
    - No
        - Cloud Storage
    - Yes
        - Analytics?
            - No
                - Relational?
                    - No
                        - Datastore (NoSQL)
                    - Yes
                        - Needs to be horizontally scalable?
                            - No
                                - Cloud SQL
                            - Yes
                                - Cloud Spanner
            - Yes
                - Updates/ Low latency
                    - Yes
                        - Cloud Big Table
                    - No
                        - Big Query

# Cloud Resource Manager
- Provides a resource container such as Organization, Folders, and Projects that you allow to group and hierarchy organize other Cloud Platform resources
    - Allows you to modify yoru Cloud Identity and Access Management policies for your organization and folder
    - Can edit projects directly
- Projects own rerouces
    - Images, snapshots, networks are now global resources
- External IP -> Region
- Instances/ Disks - Global

- Quotas
    - All resources that you create, subject to quotas, limit
    - 5 networks
    - 300 administrative requests per minute
    - Proactive request quota adjustments
    - Project quotas prevent run away consumption in billing spikes/ surprises
- Labels/ Names
    - Key: value pair designation for organization of GCP resources
        - VM, disk, snapshot, image
        - Console, gcloud or API
    - Distinguish component / instances -> billing
        - Primary contact
        - Define their state
- Tags
    - Applicable to instances only
    - Used for networking (firewall rules)
- Billing
    - Budget / notifications

# Reliable Cloud infrastructure - Design / Process
- Defining the service
    - Rough design
    - Structured Design
        - Ask Questions
    - Measurable
        - Define goals
        - Service level objectives
- Three tier architecture
    1.) Presentation layer
        - Networking
    2.) Business Logic
        - Compute
    3.) Data layer
        - Storage
    4.) Designed logic
        - Resiliency, scalability, disaster recovery
    5.) Security
        - Privacy, Denial of Service
        - Keeping it online
    6.) Capacity planning, cost optimization
    7.) Deployment process - Proactive vs Reactive
        - Blue vs Green Teams
        - Canary
        - Monitor / alert
        - Rolling updates
        - Continuous Deployment
- Tenets
    1.) Begin simply/ iterate
    2.) Plan for failure
    3.) Measure stuff
- There are no universal solutions, only contextual solutions
    - Recency bias => new ideas -> overused, create problems
        - Every tool has a purpose

## State
- Refers to any action that the system depends on memory of a preceding action
    - Store state where?
    - How to retrieve state?
    - What to do when its lost?
- State = cornerstone of cloud based design
    - VS. Stateless
        - Example:
            1.) Chef does all the cooking (Job based)
                - Not scalable
                - Single point of failure
                - Limitation
            2.) Assembly line
                - Troubleshoot single area
                - Stateless
        - Where is the truth in the system?
            - Central control mechanism = Choke point
- Best state is no state
    - Easier to apply more workers
    - Relocate tasks
    - More fault tolerant
- Depends what is state?
    - Shared document
    - Object
    - Key: value (cookies)
- Critical state
    - Best way to management/ implement
    - Hotspots
        - Push state off of service which rely on them maybe to the backend
- Cloud Load Balancing -> [FE] [FE] [FE] -> MAP ->  [BE][BE][BE][BE]
    - Sharded state with replication
    - Latency

## General solution for large scale cloud based systems
- Use DNS/ connection load balancer to get requests from users
- Stateless Frontend
    - Cloud DNs
    - HTTPS Load Balancer
    - Takes control of client request, initate server-server communication
    - Server discovery
    - Request balancing
    - Throttling
- Network Load Balancer
- Backend
    - Servers
    - DB (Some stateful sharded servers)

## Measurement
- Identify objectives to compare them against numerical objects
- Iterative objectives
- Load testing
- Bottlenecks
- Helps makes design choices by testing and validating
    - Measure during monitoring
- Service Level Objectives
    - Key Objectives
    - Indicators
        - How to measure?
        - Context for making decisions
    - Taking objectives are with measurements on what you are able to achieve
        - Controlled agreement
    - SLI/ SLO - quality fo Attribute
    - SLA - Lawyer speak

## Service Level Indicators (SLI)
- Performance
    - Latency, throughput, offered load
    - Load shedding, velocity, obtainable, freshness
- Availability
    - Uptime, outage duration, reliability
- Quality
    - Accuracy correctness
- Internal state
    - Queue length
    - Memory use
- People
    - Time to respond
    - Time to fix
    - Fraction fixed correctly

## Service Level Objectors (SLO)
- "Page on Pain" SRE (When humans get involved)
- Create actionable alerts
- Business impact involved
- Understand users; location - latency
- Freshness of data
- Gathering requirements
    - Objective related to measurement indicator
        - User request/ delivery of results
    - Asking questions
        1.) Qualitative Requirements
            - Why?
                - Systems needed?
                - Problem?
            - Who?
                - Stakeholders
                    - Who do they are and not care about?
                - Who is developing this?
                    - What is in the scope?
            - What?
                - What is in scope?
                - System needs to do what?
                - Priorities vs nice to haves?
            - When?
                - Do users needs this?
                - Time/value tradeoffs.
        2.) Quantitive Requirements
            - Resources
                - Time - Data - Users - People - Finance
            - vs. Restraints
                - Time
                    - Operational time constraints
                    - Cost of downtime
                - Data
                    - Cost of data lost
                    - Data volume
                    - Throughput
                    - Freshness
                    - Groups of data
                - Users
                    - Number
                    - Location
        3.) Scaling requirements
            - Growth in scale
                - Iterative
                - New solutions need to be able to scale
            - Limiting factors
                1.) Who at will limit your app's growth?
                2.) Which resource constraint are important to pay attention to?
                3.) How can you design to push pass through these limits?
        4.) Size requirements
            - Dimensions
            - Replication
            - Rate of change

# Microservice Architecture - method of developing
- Software application as a suite of independently deployable, small
- Modular services
    - Unique process
    - Communicates well defines lightweight mechanism
    - Each service contributes to business goals
- Atomic
- Single purpose
- Supports A/B testing

## How does microservice complicate the architecture?
- Unified Application vs Account manager that has to manage to microservices (deposit and withdrawal microservices)
    - Microservices should be used when necessary
        - Atomic unit of functionality
    - Cloud functions
        - Managed service
            - Lightweight compute solutions
        - Single purpose
            - Stand alone functions that respond to cloud events wihtout the need to run server/ runtime environment
        - Not low latency
        - Serverless
        - Less configuration for price/ performance
## Microservice design on Google App Engine
- Full code isolation, many different languages
- Executed by HTTP/ RESTful
- Multiple versions/ services
    - Shared services separated
    - One master per project
    - No local file system
- Define strong contracts between the various microservices.
- Allow for independent deployment cycles, including rollback.
- Facilitate concurrent, A/B release testing on subsystems.
- Minimize test automation and quality-assurance overhead.
- Improve clarity of logging and monitoring.
- Provide fine-grained cost accounting.
- Increase overall application scalability and reliability.
- GCP 12 factor support
    1.) Single codebase
        - Version control
        - Cloud shell, great development platform
    2.) Separate build/ run stated
        - Build GAE app in cloud shell
        - Upload to GAE
    3.) Keep Dev/ staging/ prod => automation
        - Deployment management tempaltes
    4.) Explicitly declare/ isolate dependencies
        - Custom images
    5.) Store config in environment
        - Metadata server
        - GCS - Cloud storage
    6.) Max Robustness with fast instances
        - Startup scripts / Graceful shutdowns
        - Instance templates
        - Managed instances
        - Autoscaling

## Mapping compute needs to platform product
- Where does it get its CPU resources
    1.) App engine first
        - Code first, easy to use to create apps, highly available, reliable
        - Minimize work overhead
        - Dynamic scale/ reliability
        - Containers are flexible
    2.) Containeriation
    3.) Compute Engine
- Google Kubernetes (2nd Choice)
    -  Platform independence
    - Apps can be containerized
    - Need processing efficiency
    - Migrating app from data center
    - Heavy dependence on OS
    - Direct hardware access to Local SSD
    - Hardware performance is the priority
    - Require to use VM
- Compute system provisioning
    - How to acquire new resources / adapt to changing requirments?
    - Scaling
        - ie.) 2 cores -> 64 cores
            - Outage
            - No rolling updates
            - End to end latency UP
    - Autoscaling platform => GAE
    - VM/ CE !== autoscaling

# Horizontal Scaling
    - N/3 Recommended
    - Keep servers simple - Do one thing well
        - Minimize complexity
        - Construct simple concise APIs
        - Define where tasks are separable
        - Split into separate servers
    - Prefer small/ stateless servers
        - Easy to scale; no state to shard / rebalance
        - Failure = cheap; no state to migrate/ recover
        - Easy to spot load balance
        - No hot spotting
## Design first and dimension later
### Systematic logical troubleshooting
1.) Segment, reduce the problem space
2.) Step through the system manually, in your mind
3.) Add more monitoring/ logging

### Collaboration/ Communication
- Five whys?
- Being Hero => Longer downtimes
- People != root cause; behavior = problem
    - Automate / prevent

### Problem: Log files different location -> Single log files
- Key- value pair system
- Memcache
- Cloud datastore
- (Multiple servers)

- Logging Server, Big Table, Sorted By Timestampe
- Log data is now segregated - join by session id
- Python scripts - Chron jobs -> Appends -> Transforms -> Join them by Session IDs

### Data Layer
- Covers the storage/ retrieval of ata
    - Includes: Access through SQL/ APIs
    - Excludes: transport of Data
    - Data persistent mechanism
        - Structured/ Unstructured
            - Access:
                - Loss of data access is very mportant to userse
            - Persistence:
                - Proactive detection/ rapid recovery
    - Data transaction properties
        - Consistent
            - ACID
                - Atomic
                - Consistency
                - Isolation
                - Durable
        - Availability
            - BASE
                - Basically
                - Available
                - Soft state
                - Extended consistency
        - Partition tolerance
### Data integrity
- Every service has separate data requirements
    - Users can't distinguish between data loss, corruption/ unavailability
- Uptime
    - Proportion of time service is unavailable
- Latency
    - Responsiveness
- Scale
    - Volume of users/ mix of workloads
- Velocity
    - How fast a service can innovate at a reasonable cost
- Privacy
    - Data must be destroyed within reasonablectime after user deletes data

### Data Migration/ Ingestion
- Megamaid (Cloud transfer)
    - Optimized packet transfers
- Google Transfer appliance - Ship
- Storage
    - Mobile
        - Firestorm
    - Cloud
        - Blob - Cloud Data store
        - Structured Data
            - Cloud Data store
                - noSQL
                - Cheaper than Big Table (strong transactions)
            - SQL
                - mySQL/ postGresSQL
            - Spanner
                - Global relational
                - Consitent but expesnive
        - Analytics
            - Big Table
                - Big throughput streams
            - Big Query
                - Big Data storage, known size

### Intermittent Outage
- Persistent disk cannot keep up with demands
    - Randomly dropping transactions
- File system cannt handle millions of images - Object store
    - Decouple store for unlimited scale
    - Rewrite code to use APIs vs File system lookup
    - Have to compromise on read / write latency

### Example New Service Level Objectives
- Availability = 95.83% ( 23/24 hours)
    - Indicators: Aggergate servers up / down
- Utilization of thumnail server = 80% of capacity
    - CPU Utilization <= 80%
- Failure to procude thumnail < 0.01%
    - 100 errors per million
    - Indicator:
        - Completion errors at 1 million images/ day
        - Error budget 3000 errors per minute

## Presentation Layer
- Flow of data -> system -> User -> Business logic storage service
- Location in network
    - Multiple factors = latency vs cost
    - Load balancer
        - User traffic to app servicer
        - Global
            - HTTP(s), SSL
            - TCP
                - intended for non-HTTP traffic
                - TCP Proxy Load Balancing can be configured as a global load balancing service. With this configuration, you can deploy your instances in multiple regions, and global load balancing automatically directs traffic to the region closest to the user.
                    - If a region is at capacity, the load balancer automatically directs new connections to another region with available capacity. Existing user connections remain in the current region.
                - Intelligent routing — the load balancer can route requests to backend locations where there is capacity. In contrast, an L3/L4 load balancer must route to regional backends without paying attention to capacity. Use of smarter routing allows provisioning at N+1 or N+2 instead of x*N.

        - Regional - Network
        - Internal - Backend
            - Healthcheck
        - Location is a significant factor

## Integration with other networks (Direct Connect/ Cloud)
- GCP - External IP on Load Balancer
    - Reserve Global IPs for Global LB
        - Not for regional / zonal
- Cloud CDN
    - Globally edge points of precense to cache HTTPs
        - Load balanced control
        - Faster delivery, lower cost ( 50% cheaper for egress fees)
    - Lower network latency
    - Offload origins
    - Reduces server requirements
    - Example design pattern:
        - GCP
            - Dev
            - Prod
        - Cloud Router
        - Dedicated Interconnect
            - Cloud Router interconnect
        - Direct Connection
        - Another Cloud
- Other options
    - Mesh network or aggregate VPN networks
- Problems:
    - Periodic slowdown
    - Fix problems, not people
    - Systems, processes, behavior
    - System stability
        - Fix what can be fixed
        - Prevent what can't be fixed
        - Handle what can't be prevented
## Always write a report (post mortems)
- User facing incident
- Impacted team
- Draft within 24 hours; Final within 3 business days

## Example Problem: Capacity of system to generate thumnails
- Problem: Running out of CPU, not linear
    - Solution: Place a load balancer on the upload part of the process
        - Network Load balancer -> Thumbnail Servers -> Aggregate (LB) into Data Storage Sever

# Designing fo Resiliency, Scalability, Disaster Recovery
- Fault tolerate, design as if the world is falling apart around you
- Quantum mechanic universe
    - Location of electron moving down semiconductors is purely proablistic
    - Errors and loss will happen
- Failure due to loss
    - People
        - Review procedure
        - Escalate
    - Communicate
        - Don't asume
- Single Points of Failure
    - Hardware
    - Network Path (Load Balancer)
    - Data (Replicate)

## Design to avoid single points of failures
- N +2 (Spare for the spare)
- Each unit can handle extra load
- Don't make any single unit too large or have an entire responsiblity on a single server
- Makes units interchangeable clones
- Correlated failures; top of rack failures -> Domino effect
    - Failure Domain
        - How to avoid

## Failure Due to Overload
- System crosses into non- linear behavior  -> Memory Disk -> Chain of effect
- Preventative = Best offense (Design is key)
- Failure Design
- Growth
    - Handle Additional QPS
- Cascading failure
    - One dies, subsequent processes moves over to another machine to the point of breakage -> Repeat
- Design
    - Monitor safety size
    - Autoscale early
    - N + 2
        - Increase size for failover
        - SLO/ SLI
- Fan-in overload failure
    - Floor of responses = bottleneck
    - Design to mitigate incast overload behavior
        - Tree structure
            - Limits single server fan in
            - Leaves generated data/ forwards to parent now
            - Nodes combines data from children, send merged responses to parent
            - Cost is distributed, bottleneck
    - Algorithm bakc off for retires
    - Route dampening
    - Canary
        - Early warning system

## Coping with Failure
- Controlled burn
    - Planning rotating outages
- SRE Process
    - Simulated sessions
        - Prepare team using simulated failure scenario
        - Determine cause by investigating monitoring / diagnostics
    - Present strategies for fixing the problem
- Incorporate failures into SLO/ SLI
    - Don't overengineer
    - User may not differentiate this, address in desnse
    - Define gap between user expectations to system reliability
- Meetings
    - SDLC, review SLOs/ SLI
    - Analyse / define bias process for :
        - Network outages
        - Service outages
        - Downgraded service
- Obviation
    - Part failure = impossible
- Prevention
- Detecting/ Monitoring
- Graceful degradation
    - Pay for hardware
- Repair
- Recover

## Business Continuity
- Cloud DNS - SLA 100%
    - Users care about data integrity
- Reliable recovery with lazy detection
    - User deletes -> Trash
    - App deletes
        - Soft delete for 30 days
        - App Purge = hard delete
        - Data === gone -> Backup
- Restore strategy
    - Practice with production
    - Balance with systems unknown weaknesses

## Resilient Design
- Check health checks
- Automatically replace instances that have been unavailable or failed
    - Key Tech:
        - Startup scripts
        - Instance groups/ group management
        - Instance templates
        - Health checks
    - understand its role
    - Configure itself automatically
    - Discover dependencies
    - Handle requests automatically
- Scenario:
    - Lose a whole zone -> Load balancer -> Redirects traffic
        - Cloud SQL has a resilient copy
        - Create snapshots/ reporting -> Google Cloud

## Cloud Functions - Store data in Cloud Storage
- 12 Factor System
    1.) Netowrking Load balancer
        - Backing Services as Attached
    2.) Export our services via port binding
        - Network API
            - Resource Endpoints
        - Expose Kubernetes
        - Expose Load Balancers
    3.) Exposure through Single API, global address

## Out of Service
- Planning for failure, dealing with failure
1.) In your design, improved reliability
2.) Disaster Recovery
3.) Scalable, resilient design

- Our plan when one zone went down
    - Appoint one person in charge, rotations
        - Maintain aggregate log of incident stated responses
        - Logs => Reports (Raw Data)
            - Root cause goes into the Play Book
    - Problem: Thumbnail Service down to Overload
    - Solutions: Multizones

## DDOS Atacks
### Cloud CDN
- Content served from the edge
- Cache hits insulated the network/ app

### Global load balancer
- Detect/ drop source port UDP
- Solves NTP amplification
- Bandwidth/ connection protection

### TCP / SSL Proxy
- Drops all UDP flow
- Solves SYN floods, term TCP connection

### Cloud Network Firewall
- Filter known bad traffic

### VM traffic throttling
- 10 GB per VM
- Network protects VMs against large scale sustained attacks

### Absorbing the attack
- Scale to absorb the attack
 - Protection by Google Frontend infrastructure
    -With Google Cloud Global Load Balancing, the frontend infrastructure which terminates user traffic, automatically scales to absorb certain types of attacks (e.g., SYN floods) before they reach your compute instances.
 - Anycast-based Load Balancing​:
    - HTTP(S) Load Balancing and SSL proxy
    - Enable a single anycast IP to front-end your deployed backend instances in all regions. Normally your user traffic is directed to the closest backend  with capacity;
    - In the event of a DDoS attack, the additional advantage of this approach is that it increases the surface area to absorb this attack by moving traffic to instances with available capacity in any region where backends are deployed.
 - Autoscaling​:
    - When you configure HTTP(S)or SSL Proxy Load Balancing,
    - Google frontend infrastructure that terminates your user traffic protects your backends. You should also provision sufficient number of instances 2 and/or configure autoscaling to handle spikes in traffic.
    - In the event of a sudden traffic spike, the load balancing proxy layer will distribute the traffic across all the backends with available capacity. In parallel, the autoscaler ramps up the backends inline with traffic that needs to be handled.

- Isolate your internal traffic from the external world
    - Deploy instances without public IPs unless necessary.
    - You can set up a NAT gateway or SSH bastion to limit the number of instances that are exposed to the internet.
    - Once available, deploy Internal Load Balancing for your internal client instances accessing internally deployed services thereby avoiding exposure to the external world. [Internal LB expected to be available in the second half of 2016.]

## Encrypton/ Key Management
- KMS Solution
- Store keys in memory/ stateless
- Customer management keys
- Persistent Keys/ VM
    - Client side encryption -> Send to Google
    - Disk Encryption

### Dimensions of Capacity and Cost Planning
- Optimize away resilience = mistake

### Capacity Planning
- Allow factors make initial decision -> fine time
- Forecast -> Allocate -> Approve -> Deploy -> Repeat (Monitor)
- Monitor Growth
- Predict future demand
- Plan for feature launches
- Compare with actual data

### Testing > Tradition
- Don't mistake launch demand fo stable demand
    - Remember to include N + 2 servers
    - Add Headerrom / over estimate to instance estimates

### Instance Overhead Estimations
- 30 % Cautious Estimations
- Load Testing
    - Better estimate for the estimates
    - OS image - Make 20% diff
    - Hardware architecture
        - Specific to zone
    - OS Firewalls
        - GCP firewalls might be enough

### Persistent Disks
- May be constrained by CPU
- Considered I/O bursts
- Disk performance scaled with disk size

### Network Capcity
- 2 GB / CPU Core
- Internal > External

### Workload Estimation
- Perfkit benchmarking tools -> Becoming the standard
    - Originating by google
    - Efficiency at scale
- Allocate Forecasting how much capacity
    - How much resouces is necessary
    - Yields -> Capacity?
        - Estimate cacpity requrie for forecasting
        - Validate estimate with load testing
        - Calculate resources required based on allocation rates

## Alternates to Hardware
- Caching
- Tuning
- Better Algorithms
- Alternative Services
- Test first
    - ID bottlnecks
    - Slow, staged alternatives
        - Dark Launches
        - Use invitations to stage launch

## Optimize VM Cost
- VM Dimensioning
    - Sustained Use
        - Machine type
        - Inferred Instance
        - Committed Use Discount
        - Preemptive VMs( 80%)

## Optimizing Disk cost
- How much disk space?
- VM -> VM Same Zone
    - Egress Cap
    - Theoretical cap
    - Measure!
- Performance Characteristics
    - I/O Pattern
        - Small redo/ write
    - Configure your instance to optimize storage performance

## Deployment
- Automate everything
    - Reliable
    - Self service
- Creating checklist
    - Dependencies
        - Shared Infrastracture
        - External
    - Plan for capacity
        - Verify overload handling
        - Procedure
    - Single point of failure
    - Security
        - Verify attack
    - Rollout plan
        - Gradual
        - Staged
        - Percent of users

### Deployment Manager
- YAML/ Jinja
- Resource + Properties
- Templates

#### Blackbox
- What users sees
- Treat logs as event streams
    - Stack driver
- Run admin and management
    - Service account
    - Stackdriver
        - Logging, monitoring
        - Debugging, tracing, error reporting

### Montioring/ alert
- Monitoring = measurement
    - Trends, improvements
    - Whitebox/ blackbox
    - Individual service (admin) / Customer
    - Push based metrics
    - Pull based metrics